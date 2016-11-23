module.exports = {
    htmlrender: {
        options: {
            src:  ['<%= project.blocks %>/**/*.html', 'templates/sources/*.html', '<%= project.blocks %>/**/**/*.html'], //Все возможные пути, для поиска TPL
            vars: {} //бъявление переменных, доступных внутри TPL
        },
        files:   [
            {
                expand: true, //вклюбчает и отключает указание пути в свойстве cwd
                cwd:    'templates/sources', // путь к файлу сборщика TPL
                src:    ['main.html', 'basket.html'], // Название файлов сборщика TPL, важно! Эти файлы должны так же находиться в options.src
                dest:   'templates', // Папка для собранных файлов
                ext:    '.html' //ограничение набора файлов для построения карты маршрутов
            }
        ]
    }
};