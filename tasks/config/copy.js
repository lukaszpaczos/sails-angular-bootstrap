/**
 * Copy files and folders.
 *
 * ---------------------------------------------------------------
 *
 * # dev task config
 * Copies all directories and files, exept coffescript and less fiels, from the sails
 * assets folder into the .tmp/public directory.
 *
 * # build task config
 * Copies all directories nd files from the .tmp/public directory into a www directory.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-copy
 */
module.exports = function(grunt) {

    grunt.config.set('copy', {
        dev: {
            files: [{
                expand: true,
                cwd: './assets',
                src: ['**/*.!(coffee|less)'],
                dest: '.tmp/public'
            },
                { '.tmp/public/js/dependencies/angular.js':              './bower_components/angular/angular.js' },
                { '.tmp/public/js/dependencies/angular-route.js':        './bower_components/angular-route/angular-route.js' },
                { '.tmp/public/js/dependencies/angular-resource.js':     './bower_components/angular-resource/angular-resource.js' },
                { '.tmp/public/js/dependencies/jquery.js':               './bower_components/jquery/dist/jquery.js' },
                { '.tmp/public/js/dependencies/sails.io.js':             './bower_components/bower-sails.io/sails.io.js' },
                { '.tmp/public/js/dependencies/socket.io.js':            './bower_components/socket.io-client/dist/socket.io.js' },
                { '.tmp/public/js/dependencies/ui-bootstrap.js':         './bower_components/angular-bootstrap/ui-bootstrap.js' }
            ]
        },
        build: {
            files: [{
                expand: true,
                cwd: '.tmp/public',
                src: ['**/*'],
                dest: 'www'
            }]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
};
