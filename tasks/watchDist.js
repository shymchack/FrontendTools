/**
 * Created by Tomasz.Szymczakowski on 2016-03-17.
 */
module.exports = function (grunt) {
    var watchDistConfig = {
        connect: {
            server: {
                options: {
                    base: 'dist/',
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
            livereload: {
                files: '<%= cfg.paths.output %>/index.html',
                tasks: []
            }
        }
    };

    grunt.config.merge(watchDistConfig);
    grunt.registerTask('watchDist', ['connect', 'watch']);
};