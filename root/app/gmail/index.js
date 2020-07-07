const botname = process.env.BOT_NAME
const timeout = process.env.LOOP_TIME * 1000
const orderdomain = 'nanocheckout.com'
const ordersource = 'orders@' + orderdomain
const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');
const YAML = require('yaml')
const bot = require('/config/bots/' + botname + '/index.js')
const SCOPES = ['https://www.googleapis.com/auth/gmail.readonly','https://www.googleapis.com/auth/gmail.modify'];
const TOKEN_PATH = '/config/token.json';

fs.readFile('/config/credentials.json', (err, content) => {
  if (err) return console.log('Error loading client secret file:', err);
  authorize(JSON.parse(content), run);
});

function authorize(credentials, callback) {
  const {client_secret, client_id, redirect_uris} = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0]);

  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getNewToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client);
  });
}

function getNewToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error retrieving access token', err);
      oAuth2Client.setCredentials(token);
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) return console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });
}

async function processemails(auth) {
  const gmail = google.gmail({version: 'v1', auth});
  const messages = await getmessages(gmail);
    if (messages.length > 0) {
      messages.forEach(async function (messageres) {
        const message = await getmessage(gmail,messageres.id);
        let email = {}
        email['from'] = ''
        message.payload.headers.forEach(async function (header) {
          if (header.name === 'From') {
            email['from'] = header.value
          }
          if (header.name === 'Authentication-Results') {
            email['dkim'] = header.value
          }
        });
        if (email.from !== ordersource) {
          await archive(gmail,message,'email not from expected source');
          return false;
        }
        if (!email.dkim.includes('dkim=pass header.i=@' + orderdomain)) {
          await archive(gmail,message,'bad dkim signature');
          return false;
        }
        message.payload.parts.forEach(function (part) {
          if (part.mimeType && part.mimeType === 'text/plain') {
            const emaildata = Buffer.from(part.body.data, 'base64').toString('utf-8')
            email['body'] = emaildata
          }
        });
        try {
          const order = YAML.parse(email.body);
          let botreturn = await bot.orderbot(order);
          if (botreturn == true) {
            console.log('Bot action succeeded for ' + messageres.id)
	    await archive(gmail,message,'processed');
	    return true;
          } else {
            console.log('Bot action failed for ' + messageres.id)
	    return false;
	  }
	} catch (e) {
          await archive(gmail,message,'cannot parse order YAML');
	  return false;
        }
      });
    }
}

async function archive(gmail,message,text) {
  gmail.users.messages.modify({
    userId: 'me',
    id: message.id,
    removeLabelIds: ['INBOX']
  }, function(err, res) {
    if (err) return console.log('The API returned an error: ' + err);
    console.log('Archived message: ' + message.id + ' ' + text)
    return true
  });
}

async function getmessages(gmail) {
  return new Promise(resolve => {
    gmail.users.messages.list({
      userId: 'me',
      labelIds: ['INBOX']
    }, function(err, res) {
      if (err) return console.log('The API returned an error: ' + err);
      if (res.data.messages) {
        resolve(res.data.messages)
      } else {
        resolve([])
      }
    });
  });
}

async function getmessage(gmail,id) {
  return new Promise(resolve => {
    gmail.users.messages.get({
      userId: 'me',
      id: id
    }, function(err, res) {
      if (err) return console.log('The API returned an error: ' + err);
      resolve(res.data)
    });
  });
}

module.exports = {
  SCOPES,
  processemails,
};

async function run(auth) {
  while (true) {
    processemails(auth)
    await new Promise(resolve => setTimeout(resolve, timeout));
  }
}
