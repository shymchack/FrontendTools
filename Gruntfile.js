module.exports = function(grunt) {
	grunt.registerTask('help', 'displays console help', function(){
		grunt.log.writeln('Welcome to grunt help...');
		grunt.log.subhead('Oko');
	});
  grunt.initConfig({
    connect: {
		server: {
			options: {
				port: 9000,
				hostname: 'localhost',
				open: true,
				livereload: true
			}
		}
    },
	watch: {
		options: {
			livereload: true
		},
		livereload:{
			files: 'index.html',
			tasks: []
		}
	}
  });
	require('load-grunt-tasks')(grunt);

  grunt.registerTask('index', ['connect']);
  grunt.registerTask('default', ['build']);
  grunt.registerTask('build', ['index', 'watch']);
};