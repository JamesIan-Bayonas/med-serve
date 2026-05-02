FROM php:8.2-fpm

# 1. SYSTEM LAYER (Rarely changes)
# We install system tools first. Since these don't change often, 
# Docker will cache this "layer" indefinitely.
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    nodejs \
    npm

RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www

# 2. DEPENDENCY LAYER (Changes only when you edit json files)
# We copy ONLY the requirement files first. 
# If you edit a Controller or a React View, Docker sees these files 
# haven't changed and SKIPS the slow 'install' steps below.
COPY composer.json composer.lock* package.json package-lock.json* /var/www/

# Run the heavy installations
RUN composer install --no-scripts --no-autoloader
RUN npm install

# 3. APPLICATION LAYER (Changes frequently)
# Finally, we copy the rest of your code. 
# This layer is at the bottom of the stack, so it won't trigger 
# a rebuild of the system or node_modules.
COPY . /var/www

# Finish the composer setup
RUN composer dump-autoload

RUN chown -R www-data:www-data /var/www

EXPOSE 9000
CMD ["php-fpm"]