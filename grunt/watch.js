module.exports = {
    css: {
        files: [
            '<%= project.app %>/blocks/**/{,*/}*.{scss,sass}',
            '<%= project.app %>/libs/sass/{,*/}*.{scss,sass}',
            '<%= project.app %>/<%= project.name %>*.{scss,sass}'
        ],
        tasks: ['sass', 'autoprefixer'],
        options: {
            spawn: false
        }
    },
    scripts: {
        files: [
            '<%= project.libs %>/js/*.js',
            '<%= project.blocks %>/**/js/*.js'
        ],
        tasks: ['concat'],
        options: {
            spawn: false
        }
    },
    html: {
        files: [
            '<%= project.blocks %>/**/*.html',
            'templates/sources/*.html',
            '<%= project.blocks %>/**/**/*.html'
        ],
        tasks: ['htmlrender'],
        options: {
            spawn: true
        }
    },
    other: {
        files: ['<%= project.images %>/*.{png,jpg,gif,svg}'],
        tasks: ['copy'],
        options: {
            spawn: true
        }
    }
};