module.exports = {
    static: {
        files: [{
            expand: true,
            cwd: '<%=project.app %>/dist/img/',
            src: ['{,*/}*.{png,jpg,gif}'],
            dest: '<%=project.app %>/dist/img/'
        }]
    }
};