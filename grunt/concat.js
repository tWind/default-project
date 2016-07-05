module.exports = {
    base: {
        src: [
            '<%= project.libs %>/js/*.js',
            '<%= project.libs %>/js/**/*.js'
        ],
        dest: '<%= project.js %>/<%= project.name %>-base.js'
    },
    run: {
        src: [
            '<%= project.blocks %>/**/js/*.js',
            '<%= project.app %>/<%= project.name%>.bundle.js'
        ],
        dest: '<%= project.js %>/<%= project.name %>-run.js'
    }
};