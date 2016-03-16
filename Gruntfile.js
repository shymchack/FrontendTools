module.exports = function(grunt) {

  grunt.initConfig({
    connect: {
		server: {
			options: {
				port: 9000,
				hostname: 'localhost',
				open: true,
				keepalive: true
			}
		}
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('index', ['connect']);

};