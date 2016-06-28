module.exports = {
    base: {
        src: [
            '<%= project.libs %>/js/*.js'
        ],
        dest: '<%= project.js %>/<%= project.name %>-base.js'                  // production
    },
    run: {
        src: '<%= project.blocks %>/**/js/*.js',
        dest: '<%= project.js %>/<%= project.name %>-run.js'
    }
};