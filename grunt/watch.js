module.exports = {
    css: {
        files: [
            '<%= project.app %>/blocks/**/{,*/}*.{scss,sass}'
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
    other: {
        files: ['<%= project.images %>/*.{png,jpg,gif,svg}'],
        tasks: ['copy'],
        options: {
            spawn: true
        }
    }
};