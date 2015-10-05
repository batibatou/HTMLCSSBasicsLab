'use strict';

module.exports = function(grunt) {
    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    // configurable paths
    var yeomanConfig = {
        app: 'app',
        test: 'tests'
    };

    grunt.initConfig({
        yeoman: yeomanConfig,
        watch: {
            options: {
                livereload: '<%= connect.options.livereload %>'
            },
            files: [
                '<%= yeoman.app %>/*.html',
                '<%= yeoman.app %>/styles/{,*/}*.css',
                '<%= yeoman.app %>/scripts/{,*/}*.js',
                '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
                '<%= yeoman.test %>/**/*.html',
                '<%= yeoman.test %>/**/*.js',
            ]
        },
        qunit: {
            all: {
                options: {
                    urls: [
                        'http://localhost:<%= connect.options.port %>/index.html'
                    ]
                }
            }
        },
        connect: {
            options: {
                port: 9000,
                open:true,
                livereload: 35729,
                // change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    base: [
                        '<%= yeoman.app %>'
                    ]
                }
            },
            test: {
                options: {
                    base: [
                        '<%= yeoman.test %>',
                        '<%= yeoman.app %>'
                    ]
                }
            },
            testCI: {
                options: {
                    open: false,
                    base: [
                        '<%= yeoman.test %>',
                        '<%= yeoman.app %>'
                    ]
                }
            }
        },
        open: {
            server: {
                path: 'http://<%= connect.options.hostname %>:<%= connect.options.port %>'
            }
        }
    });

    // grunt.loadNpmTasks('grunt-contrib-qunit');

    grunt.registerTask('serve', function(target) {
        grunt.task.run([
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('testBrowser', function(target) {
        grunt.task.run([
            'connect:test',
            'watch'
        ]);
    });

    grunt.registerTask('testCI', function(target) {
        grunt.task.run([
            'connect:testCI',
            'qunit'
        ]);
    });
};
