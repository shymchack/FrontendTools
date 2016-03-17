/**
 * Created by Tomasz.Szymczakowski on 2016-03-17.
 */
module.exports = function (grunt) {
    var prepareDistConfig = {
        clean: {
            dist: ['<%= cfg.paths.output %>']
        },
        copy: {
            html: {
                src: '<%= cfg.paths.source %>/index.html',
                dest: '<%= cfg.paths.output %>/index.html'
            },
            bootstrap: {
                src: '<%= cfg.paths.bower %>/bootstrap/dist/css/bootstrap.min.css',
                dest: '<%= cfg.paths.output %>/bootstrap.min.css'
            },
            jumbotron: {
                src: '<%= cfg.paths.source %>/styles/jumbotron.css',
                dest: '<%= cfg.paths.output %>/jumbotron.css'
            }
        }
    };

    grunt.config.merge(prepareDistConfig);

    grunt.registerTask('prepareDist', ['clean', 'copy']);
}