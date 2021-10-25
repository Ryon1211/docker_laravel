FROM php:8.0.12-fpm-buster

# シェルの設定を変更
SHELL ["/bin/bash", "-c", "-oeux", "pipefail"]

# パッケージのインストール
# インストール完了後にaptキャッシュを削除
RUN apt-get update && apt-get install -y \
  git vim gcc make unzip \
  libzip-dev libicu-dev libonig-dev && \
  apt-get clean && \
  rm -rf /var/lib/apt/lists/* && \
  docker-php-ext-install intl pdo_mysql zip bcmath

# apt-getでは、古いバージョンのnodejsがインストールされるので、nvmをインストールして管理
# build後にnvm install --ltsで最新のLTSバージョンをインストールする
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

COPY ./php-fpm/www.conf /usr/local/etc/php-fpm.d/www.conf
COPY ./php-ini/php.ini /usr/local/etc/php/php.ini

WORKDIR /www

# composerのインストール
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
ENV COMPOSER_ALLOW_SUPERUSER=1


ARG USERNAME=fpm
ARG GROUPNAME=fpm
ARG UID=1000
ARG GID=1000
RUN groupadd -g $GID $GROUPNAME && \
  useradd -ms /bin/bash -u $UID -g $GID $USERNAME

USER $USERNAME
