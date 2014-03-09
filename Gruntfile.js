'use strict';
module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        'lib/{,*/}*.js',
        'test/spec/{,*/}*.js'
      ]
    }
  });

  grunt.registerTask('default', ['jshint']);
};
