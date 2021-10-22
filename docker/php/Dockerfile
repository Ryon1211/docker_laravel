FROM php:8.0.12-fpm-buster
# シェルの設定を変更
SHELL ["/bin/bash", "-c", "-oeux", "pipefail"]
# パッケージのインストール
# インストール完了後にaptキャッシュを削除
RUN apt-get update && apt-get install -y \
  git vim gcc make nodejs unzip \
  libzip-dev libicu-dev libonig-dev && \
  apt-get clean && \
  rm -rf /var/lib/apt/lists/* && \
  docker-php-ext-install intl pdo_mysql zip bcmath

COPY ./php.ini /usr/local/etc/php/php.ini

WORKDIR /www

# composerのインストール
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
ENV COMPOSER_ALLOW_SUPERUSER=1

# Laravelインストーラのインストール
RUN composer global require laravel/installer
