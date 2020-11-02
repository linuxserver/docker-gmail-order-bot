FROM ghcr.io/linuxserver/baseimage-alpine:3.12

# set version label
ARG BUILD_DATE
ARG VERSION
ARG BOT_VERSION
LABEL build_version="Linuxserver.io version:- ${VERSION} Build-date:- ${BUILD_DATE}"
LABEL maintainer="thelamer"

# env
ENV npm_config_cache=/tmp

# add local files
COPY root/ /

RUN \
 echo "**** install runtime packages ****" && \
 apk add --no-cache \
	nodejs \
	nodejs-npm && \
 npm config set unsafe-perm true && \
 npm install --prefix /app/gmail && \
 echo "**** cleanup ****" && \
 rm -rf \
	/root \
	/tmp/* && \
 mkdir -p \
	/root

# volumes
VOLUME /config
