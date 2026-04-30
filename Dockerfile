FROM php:8.2-fpm

# Install core system dependencies required by Laravel and Vite
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

# Clear out apt cache to keep the image lightweight
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Install and enable necessary PHP extensions
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

# Import the latest Composer executable
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Establish the working directory inside the container
WORKDIR /var/www

# Copy existing application directory contents
COPY . /var/www

# Ensure proper permissions for the web server user
RUN chown -R www-data:www-data /var/www

EXPOSE 9000
CMD ["php-fpm"]