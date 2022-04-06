<!-- DO NOT EDIT THIS FILE MANUALLY  -->
<!-- Please read the https://github.com/lsiodev/docker-gmail-order-bot/blob/master/.github/CONTRIBUTING.md -->

[![linuxserver.io](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/linuxserver_medium.png)](https://linuxserver.io)

[![Blog](https://img.shields.io/static/v1.svg?color=94398d&labelColor=555555&logoColor=ffffff&style=for-the-badge&label=linuxserver.io&message=Blog)](https://blog.linuxserver.io "all the things you can do with our containers including How-To guides, opinions and much more!")
[![Discord](https://img.shields.io/discord/354974912613449730.svg?color=94398d&labelColor=555555&logoColor=ffffff&style=for-the-badge&label=Discord&logo=discord)](https://discord.gg/YWrKVTn "realtime support / chat with the community and the team.")
[![Discourse](https://img.shields.io/discourse/https/discourse.linuxserver.io/topics.svg?color=94398d&labelColor=555555&logoColor=ffffff&style=for-the-badge&logo=discourse)](https://discourse.linuxserver.io "post on our community forum.")
[![Fleet](https://img.shields.io/static/v1.svg?color=94398d&labelColor=555555&logoColor=ffffff&style=for-the-badge&label=linuxserver.io&message=Fleet)](https://fleet.linuxserver.io "an online web interface which displays all of our maintained images.")
[![GitHub](https://img.shields.io/static/v1.svg?color=94398d&labelColor=555555&logoColor=ffffff&style=for-the-badge&label=linuxserver.io&message=GitHub&logo=github)](https://github.com/lsiodev "view the source for all of our repositories.")
[![Open Collective](https://img.shields.io/opencollective/all/lsiodev.svg?color=94398d&labelColor=555555&logoColor=ffffff&style=for-the-badge&label=Supporters&logo=open%20collective)](https://opencollective.com/lsiodev "please consider helping us by either donating or contributing to our budget")

The [LinuxServer.io](https://linuxserver.io) team brings you another container release featuring:

* regular and timely application updates
* easy user mappings (PGID, PUID)
* custom base image with s6 overlay
* weekly base OS updates with common layers across the entire LinuxServer.io ecosystem to minimise space usage, down time and bandwidth
* regular security updates

Find us at:

* [Blog](https://blog.linuxserver.io) - all the things you can do with our containers including How-To guides, opinions and much more!
* [Discord](https://discord.gg/YWrKVTn) - realtime support / chat with the community and the team.
* [Discourse](https://discourse.linuxserver.io) - post on our community forum.
* [Fleet](https://fleet.linuxserver.io) - an online web interface which displays all of our maintained images.
* [GitHub](https://github.com/lsiodev) - view the source for all of our repositories.
* [Open Collective](https://opencollective.com/lsiodev) - please consider helping us by either donating or contributing to our budget

# [lsiodev/gmail-order-bot](https://github.com/lsiodev/docker-gmail-order-bot)

[![Scarf.io pulls](https://scarf.sh/installs-badge/lsiodev-ci/lsiodev%2Fgmail-order-bot?color=94398d&label-color=555555&logo-color=ffffff&style=for-the-badge&package-type=docker)](https://scarf.sh/gateway/lsiodev-ci/docker/lsiodev%2Fgmail-order-bot)
[![GitHub Stars](https://img.shields.io/github/stars/lsiodev/docker-gmail-order-bot.svg?color=94398d&labelColor=555555&logoColor=ffffff&style=for-the-badge&logo=github)](https://github.com/lsiodev/docker-gmail-order-bot)
[![GitHub Release](https://img.shields.io/github/release/lsiodev/docker-gmail-order-bot.svg?color=94398d&labelColor=555555&logoColor=ffffff&style=for-the-badge&logo=github)](https://github.com/lsiodev/docker-gmail-order-bot/releases)
[![GitHub Package Repository](https://img.shields.io/static/v1.svg?color=94398d&labelColor=555555&logoColor=ffffff&style=for-the-badge&label=linuxserver.io&message=GitHub%20Package&logo=github)](https://github.com/lsiodev/docker-gmail-order-bot/packages)
[![GitLab Container Registry](https://img.shields.io/static/v1.svg?color=94398d&labelColor=555555&logoColor=ffffff&style=for-the-badge&label=linuxserver.io&message=GitLab%20Registry&logo=gitlab)](https://gitlab.com/linuxserver.io/docker-gmail-order-bot/container_registry)
[![Quay.io](https://img.shields.io/static/v1.svg?color=94398d&labelColor=555555&logoColor=ffffff&style=for-the-badge&label=linuxserver.io&message=Quay.io)](https://quay.io/repository/linuxserver.io/gmail-order-bot)
[![Docker Pulls](https://img.shields.io/docker/pulls/lsiodev/gmail-order-bot.svg?color=94398d&labelColor=555555&logoColor=ffffff&style=for-the-badge&label=pulls&logo=docker)](https://hub.docker.com/r/lsiodev/gmail-order-bot)
[![Docker Stars](https://img.shields.io/docker/stars/lsiodev/gmail-order-bot.svg?color=94398d&labelColor=555555&logoColor=ffffff&style=for-the-badge&label=stars&logo=docker)](https://hub.docker.com/r/lsiodev/gmail-order-bot)
[![Jenkins Build](https://img.shields.io/jenkins/build?labelColor=555555&logoColor=ffffff&style=for-the-badge&jobUrl=https%3A%2F%2Fci.linuxserver.io%2Fjob%2FDocker-Pipeline-Builders%2Fjob%2Fdocker-gmail-order-bot%2Fjob%2Fmaster%2F&logo=jenkins)](https://ci.linuxserver.io/job/Docker-Pipeline-Builders/job/docker-gmail-order-bot/job/master/)

[Gmail-order-bot](https://developers.google.com/gmail/api) - A bot used to leverage a Gmail account as an order messaging service to consume email orders from [Nano Checkout](https://github.com/linuxserver/nano-checkout) and process them using any custom logic you choose.

[![gmail-order-bot](https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Gmail_Icon.svg/512px-Gmail_Icon.svg.png)](https://developers.google.com/gmail/api)

## Supported Architectures

Our images support multiple architectures such as `x86-64`, `arm64` and `armhf`. We utilise the docker manifest for multi-platform awareness. More information is available from docker [here](https://github.com/docker/distribution/blob/master/docs/spec/manifest-v2-2.md#manifest-list) and our announcement [here](https://blog.linuxserver.io/2019/02/21/the-lsio-pipeline-project/).

Simply pulling `lscr.io/lsiodev/gmail-order-bot` should retrieve the correct image for your arch, but you can also pull specific arch images via tags.

The architectures supported by this image are:

| Architecture | Tag |
| :----: | --- |
| x86-64 | amd64-latest |
| arm64 | arm64v8-latest |
| armhf | arm32v7-latest |

## Application Setup

This container is for developers only! We make pre-defined bots we use in our workflow, but you have to have an underlying understanding of javascript and some basic Docker skills to use it.

The entire basis of this is to act as middleware between your email address receiving orders from https://checkout.linuxserver.io and send them to some external service. The bot will archive any messages that do not come from orders@nanocheckout.com with valid DKIM signatures, so definetly do not use this on a personal account.

The concept behind this bot and using email as a destination for orders is to serve normal users that simply want an email for an order out of the box and provide a free messaging queue akin to something like RabbitMQ for people that want to automate order ingestion. 

By default we include bots we use that will be copied over on first container run, for example a simple discord ping when an order is received with the order details:
```
const Discord = require('discord.js');
const YAML = require('yaml');
const discordtoken = process.env.DISCORD_TOKEN;
const roomid = process.env.DISCORD_ROOM


exports.orderbot = async function(order) {
  return new Promise(resolve => {
    const client = new Discord.Client();
    client.login(discordtoken);
    client.on('ready', async () => {
      delete order.rawpayload
      await client.channels.cache.get(roomid.toString()).send(YAML.stringify(order));
      client.destroy();
      resolve(true)
    })
  });
}
```

This code will be passed an order object containing all the order details parsed from the email message. Here we use custom env variables to set application settings to connect up to and send a message to discord. 

In order to use this bot you will need to perform the following setup steps: 
1. Create a dedicated gmail account to use for https://checkout.linuxserver.io
2. Enable API access to this Gmail account by clicking on `Enable the Gmail API` here https://developers.google.com/gmail/api/quickstart/nodejs
3. Save your credentials.json file from that action to the folder you will be bind mounting as `/config`
4. Run `docker run --rm -it -u $(id -u ${USER}):$(id -g ${USER}) -v /path/to/data:/config --entrypoint /config.sh lsiodev/gmail-order-bot`
5. Go to the URL prompted and enter the key you get from it.
6. Start the container using the run/compose example in this readme.

When the container starts if you are using a custom bot located in `/config/bots` it will install the node modules included in it's package.json, do not use system level node modules this container is Alpine based and it will cause conflicts. 

From there the bot will loop in for your defined timeout and pull in emails and spit out orders to your destination.

## Usage

Here are some example snippets to help you get started creating a container.

### docker-compose (recommended, [click here for more info](https://docs.linuxserver.io/general/docker-compose))

```yaml
---
version: "2.1"
services:
  gmail-order-bot:
    image: lscr.io/lsiodev/gmail-order-bot
    container_name: gmail-order-bot
    environment:
      - PUID=1000
      - PGID=1000
      - BOT_NAME=discord
      - LOOP_TIME=60
    volumes:
      - /path/to/data:/config
    restart: unless-stopped
```

### docker cli ([click here for more info](https://docs.docker.com/engine/reference/commandline/cli/))

```bash
docker run -d \
  --name=gmail-order-bot \
  -e PUID=1000 \
  -e PGID=1000 \
  -e BOT_NAME=discord \
  -e LOOP_TIME=60 \
  -v /path/to/data:/config \
  --restart unless-stopped \
  lscr.io/lsiodev/gmail-order-bot
```

## Parameters

Container images are configured using parameters passed at runtime (such as those above). These parameters are separated by a colon and indicate `<external>:<internal>` respectively. For example, `-p 8080:80` would expose port `80` from inside the container to be accessible from the host's IP on port `8080` outside the container.

| Parameter | Function |
| :----: | --- |
| `-e PUID=1000` | for UserID - see below for explanation |
| `-e PGID=1000` | for GroupID - see below for explanation |
| `-e BOT_NAME=discord` | On successful order receive send the order payload to this bot (default bots are located in root/defaults/bots) |
| `-e LOOP_TIME=60` | Time in seconds to reach into gmail and get new messages to process |
| `-v /config` | Path to gmail tokens and custom/default bots |

## Environment variables from files (Docker secrets)

You can set any environment variable from a file by using a special prepend `FILE__`.

As an example:

```bash
-e FILE__PASSWORD=/run/secrets/mysecretpassword
```

Will set the environment variable `PASSWORD` based on the contents of the `/run/secrets/mysecretpassword` file.

## Umask for running applications

For all of our images we provide the ability to override the default umask settings for services started within the containers using the optional `-e UMASK=022` setting.
Keep in mind umask is not chmod it subtracts from permissions based on it's value it does not add. Please read up [here](https://en.wikipedia.org/wiki/Umask) before asking for support.

## User / Group Identifiers

When using volumes (`-v` flags) permissions issues can arise between the host OS and the container, we avoid this issue by allowing you to specify the user `PUID` and group `PGID`.

Ensure any volume directories on the host are owned by the same user you specify and any permissions issues will vanish like magic.

In this instance `PUID=1000` and `PGID=1000`, to find yours use `id user` as below:

```bash
  $ id username
    uid=1000(dockeruser) gid=1000(dockergroup) groups=1000(dockergroup)
```

## Docker Mods

[![Docker Mods](https://img.shields.io/badge/dynamic/yaml?color=94398d&labelColor=555555&logoColor=ffffff&style=for-the-badge&label=gmail-order-bot&query=%24.mods%5B%27gmail-order-bot%27%5D.mod_count&url=https%3A%2F%2Fraw.githubusercontent.com%2Flinuxserver%2Fdocker-mods%2Fmaster%2Fmod-list.yml)](https://mods.linuxserver.io/?mod=gmail-order-bot "view available mods for this container.") [![Docker Universal Mods](https://img.shields.io/badge/dynamic/yaml?color=94398d&labelColor=555555&logoColor=ffffff&style=for-the-badge&label=universal&query=%24.mods%5B%27universal%27%5D.mod_count&url=https%3A%2F%2Fraw.githubusercontent.com%2Flinuxserver%2Fdocker-mods%2Fmaster%2Fmod-list.yml)](https://mods.linuxserver.io/?mod=universal "view available universal mods.")

We publish various [Docker Mods](https://github.com/lsiodev/docker-mods) to enable additional functionality within the containers. The list of Mods available for this image (if any) as well as universal mods that can be applied to any one of our images can be accessed via the dynamic badges above.

## Support Info

* Shell access whilst the container is running: `docker exec -it gmail-order-bot /bin/bash`
* To monitor the logs of the container in realtime: `docker logs -f gmail-order-bot`
* container version number
  * `docker inspect -f '{{ index .Config.Labels "build_version" }}' gmail-order-bot`
* image version number
  * `docker inspect -f '{{ index .Config.Labels "build_version" }}' lscr.io/lsiodev/gmail-order-bot`

## Updating Info

Most of our images are static, versioned, and require an image update and container recreation to update the app inside. With some exceptions (ie. nextcloud, plex), we do not recommend or support updating apps inside the container. Please consult the [Application Setup](#application-setup) section above to see if it is recommended for the image.

Below are the instructions for updating containers:

### Via Docker Compose

* Update all images: `docker-compose pull`
  * or update a single image: `docker-compose pull gmail-order-bot`
* Let compose update all containers as necessary: `docker-compose up -d`
  * or update a single container: `docker-compose up -d gmail-order-bot`
* You can also remove the old dangling images: `docker image prune`

### Via Docker Run

* Update the image: `docker pull lscr.io/lsiodev/gmail-order-bot`
* Stop the running container: `docker stop gmail-order-bot`
* Delete the container: `docker rm gmail-order-bot`
* Recreate a new container with the same docker run parameters as instructed above (if mapped correctly to a host folder, your `/config` folder and settings will be preserved)
* You can also remove the old dangling images: `docker image prune`

### Via Watchtower auto-updater (only use if you don't remember the original parameters)

* Pull the latest image at its tag and replace it with the same env variables in one run:

  ```bash
  docker run --rm \
  -v /var/run/docker.sock:/var/run/docker.sock \
  containrrr/watchtower \
  --run-once gmail-order-bot
  ```

* You can also remove the old dangling images: `docker image prune`

**Note:** We do not endorse the use of Watchtower as a solution to automated updates of existing Docker containers. In fact we generally discourage automated updates. However, this is a useful tool for one-time manual updates of containers where you have forgotten the original parameters. In the long term, we highly recommend using [Docker Compose](https://docs.linuxserver.io/general/docker-compose).

### Image Update Notifications - Diun (Docker Image Update Notifier)

* We recommend [Diun](https://crazymax.dev/diun/) for update notifications. Other tools that automatically update containers unattended are not recommended or supported.

## Building locally

If you want to make local modifications to these images for development purposes or just to customize the logic:

```bash
git clone https://github.com/lsiodev/docker-gmail-order-bot.git
cd docker-gmail-order-bot
docker build \
  --no-cache \
  --pull \
  -t lscr.io/lsiodev/gmail-order-bot:latest .
```

The ARM variants can be built on x86_64 hardware using `multiarch/qemu-user-static`

```bash
docker run --rm --privileged multiarch/qemu-user-static:register --reset
```

Once registered you can define the dockerfile to use with `-f Dockerfile.aarch64`.

## Versions

* **06.07.20:** - Initial Release.
