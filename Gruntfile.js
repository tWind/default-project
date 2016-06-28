module.exports = function (grunt) {
	require('load-grunt-config')(grunt, {
		jitGrunt: true,
		data: {
			project: {
				name: 'default-project',
				app: 'public',
				dist: '<%=project.app %>/dist',
				scss: '<%=project.app %>/<%=project.name%>.scss',
				blocks: '<%project.app %>/blocks',
				libs: '<%=project.app %>/libs',
				modules: '<%=project.app %>/modules'
			}
		}
	});
};
