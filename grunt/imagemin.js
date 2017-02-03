module.exports = {
    png: {
        options: {
            optimizationLevel: 7
        },
        files: [{
            expand: true,
            cwd: '<%=project.app %>/dist/img/',
            src: ['{,*/}*.{png}'],
            dest: '<%=project.app %>/dist/img/'
        }]
    },
    jpg: {
        options: {
            progressive: true
        },
        files: [
            {
                expand: true,
                cwd: '<%=project.app %>/dist/img/',
                src: ['{,*/}*.{jpg}'],
                dest: '<%=project.app %>/dist/img/'
            }
        ]
    }
};