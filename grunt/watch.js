module.exports = {
    css: {
        files: [
            '<%= project.app %>/blocks/**/{,*/}*.{scss,sass}'
        ],
        tasks: ['sass'],
        options: {
            spawn: false
        }
    },
    // scripts: {
    //     files: [
    //         '<%= project.libs %>/js/*.js',
    //         '<%= project.blocks %>/**/js/*.js'
    //     ],
    //     tasks: ['concat'],
    //     options: {
    //         spawn: false
    //     }
    // }
};