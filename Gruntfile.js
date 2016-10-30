module.exports = function (grunt) {
	require('jit-grunt')(grunt, {
		sprite: 'grunt-spritesmith',
		imagemin: 'grunt-contrib-imagemin'
	});
	require('load-grunt-config')(grunt, {
		jitGrunt: true,
		data: {
			project: {
				name   : 'default-project',
				app    : 'public',
				dist   : '<%=project.app %>/dist',
				scss   : '<%=project.app %>/<%=project.name%>.scss',
				js     : '<%=project.dist %>/js',
				blocks : '<%=project.app %>/blocks',
				libs   : '<%=project.app %>/libs',
				modules: '<%=project.app %>/modules',
				images : '<%=project.app %>/img',
				fonts  : '<%=project.app %>/fonts'
			}
		}
	});
};