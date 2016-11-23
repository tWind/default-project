# Starting a new project ver 3.0

## Начало работы ##

Для начала работы скачайте репозиторий.
Затем с помощью терминала или командной строки перейдите в корень каталога.
Установите NPM. Создайте символическую ссылку на каталог "public/dist".
Запустите сборку проекта.

```
cd <корень проекта> // Переход в каталог с проектом
npm install         // Установка NPM
```

### Windows ###
```
// Создание символической ссылки на каталог "public/dist" (Windows)
mklink /d dist public\dist 
```
### Unix ###
```
// Создание символической ссылки на каталог "public/dist" (Unix)
ln -s public/dist dist
```

```
// Запуск сборки
grunt
```

Верстка будет доступна по адресу 127.0.0.1:7700/templates/

## Список NPM ##

* grunt
* grunt-autoprefixer
* grunt-browserify
* grunt-contrib-concat
* grunt-contrib-connect
* grunt-contrib-copy
* grunt-contrib-watch
* grunt-sass
* grunt-spritesmith
* jit-grunt
* load-grunt-config
* grunt-contrib-imagemin
* susy
* breakpoint-sass

## Grunt tasks ##

* sprite
* copy
* sass
* autoprefixer
* browserify
* concat
* imagemin
* connect
* watch

## version history ##

### 3.0.1 ###
- Susy grid support added;
http://susy.oddbird.net/
- blocks collector wind-framework added;

### 3.0.2 ###
- browserify task added; (https://github.com/jmreidy/grunt-browserify)
- concat task now concatenates only js libraries;

@todo
- add babel with ES 2015 preset;

### 3.0.3 ###
- imagemin package and task added; (https://github.com/gruntjs/grunt-contrib-imagemin)
- breakpoint package added; (https://github.com/at-import/breakpoint)
- .gitignore update
- templates/main.html create and updated
- public/blocks updated and optimized