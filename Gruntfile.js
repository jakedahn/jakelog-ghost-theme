module.exports = function (grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        watch: {
            options: {
                livereload: {
                    port: 35729,
                }
            },
            ember_templates: {
                files: ['*.hbs', 'partials/*.hbs'],
            },
            js: {
                files: ['assets/js/*'],
                tasks: ['uglify', 'concat']
            },
            sass: {
                files: ['assets/scss/*'],
                tasks: ['compass', 'cssmin']
            }
        },

        compass: {
            dist: {
                options: {
                    sassDir: 'assets/scss/',
                    specify: 'assets/scss/main.scss',
                    cssDir: 'assets/scss/build/',
                    environment: 'production' //changeme
                }
            }
        },

        cssmin: {
            combine: {
                files: {
                    'assets/css/theme.min.css': ['assets/scss/build/*.css']
                }
            }
        },

        copy: {
            main: {
                files: [
                    {expand: true, flatten: true, src: ['bower_components/components-font-awesome/fonts/*'], dest: './assets/fonts'}
                ]
            }
        },
        uglify: {
            js: {
                files: {
                    'assets/js/theme.min.js': ['assets/js/lib/*.js', 'assets/js/plugins/*.js', 'assets/js/base.js']
                }
            }
        },

        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['assets/js/config.js', 'assets/js/theme.min.js'],
                dest: 'assets/js/theme.min.js',
            },
        },

        connect: {
            server: {
                options: {
                    hostname: '127.0.0.1',
                    port: 8080,
                    base: '',
                    livereload: true
                }
            }
        }


    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-connect');


    grunt.registerTask('default', ['compass', 'cssmin', 'uglify', 'concat', 'watch']);
    grunt.registerTask('dev', ['compass', 'cssmin', 'uglify', 'concat', 'connect', 'copy', 'watch']);
    grunt.registerTask('build', ['compass', 'cssmin', 'uglify', 'concat']);

};
