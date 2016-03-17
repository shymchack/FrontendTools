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
        },
        connect: {
            server: {
                options: {
                    base: 'src/',
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
        },
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
    });
    require('load-grunt-tasks')(grunt);

    grunt.registerTask('index', ['connect']);
    grunt.registerTask('default', ['build']);
    grunt.registerTask('build', ['clean', 'copy', 'index', 'watch']);
};