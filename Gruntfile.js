module.exports = function(grunt) {


    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jade: {
            compile: {
                files: {
                    "index.html": "dev/jade/*.jade"
                }
            }
        },
        compass: {
            options: {
                sassDir: 'dev/styles/sass',
            },
            dist: {
                options: {
                    config: 'dev/styles/config.rb',
                    cssDir: 'dev/styles/stylesheets'
                }
            }
        },
        watch: {
            src: {
                files: ['dev/styles/sass/*.scss', 'dev/jade/*.jade'],
                tasks: ['compass', 'jade'],
                options: {
                    livereload: true
                }
            }
        },
        connect: {
            server: {
                options: {
                    port: 1111,
                    livereload: true
                },
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', ['jade', 'compass', 'connect:server', 'watch']);
};