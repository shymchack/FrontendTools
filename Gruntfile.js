module.exports = function(grunt) {

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

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('index', ['connect']);
  grunt.registerTask('default', ['build']);
  grunt.registerTask('build', ['index', 'watch']);
};