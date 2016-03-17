module.exports = function (grunt) {
    grunt.registerTask('help', 'displays console help', function () {
        grunt.log.writeln('Welcome to grunt help...');
        grunt.log.subhead('Oko');
    });
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cfg: {
            paths: {
                root: __dirname,
                source: '<%= cfg.paths.root %>/src',
                output: '<%= cfg.paths.root %>/dist',
                bower: '<%= cfg.paths.root %>/bower_components'
            }
        }
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', ['build']);
    grunt.registerTask('build', ['prepareDist', 'watchDist']);

    grunt.task.loadTasks('tasks');
};