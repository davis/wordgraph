module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      dist: {
        src: [
            'public/javascripts/*.js',
          ],
          dest: 'public/dist/production.js',
        }
      },

      mochaTest: {
        test: {
          options: {
            reporter: 'spec'
          },
          src: ['test/**/*.js']
        }
      },

      nodemon: {
        dev: {
          script: 'server.js'
        }
      },

      uglify: {
        build: {
          src: 'public/dist/production.js',
          dest: 'public/dist/production.min.js'
        }
      },

      jshint: {
        files: [
          'Gruntfile.js',
          'server-config.js',
          'server.js',
          'app/*.js',
          'app/**/*.js',
          'lib/*.js',
          'public/client/*.js',
          'public/views/*.js'
        ],
        options: {
          force: 'true',
          jshintrc: '.jshintrc',
          ignores: [
            'public/lib/**/*.js',
            'public/dist/**/*.js'
          ]
        }
      },

      cssmin: {
        minify: {
          expand: true,
          cwd: 'public/st',
          src: ['*.css', '!*.min.css'],
          dest: 'public/dist/',
          ext: '.min.css'
        }
      },

      watch: {
        scripts: {
          files: [
            'public/javascripts/*.js'
          ],
          tasks: [
            'concat',
            'uglify'
          ]
        },
        css: {
          files: 'public/stylesheets/*.css',
          tasks: ['cssmin']
        }
      },

      shell: {
        prodServer: {
          command: [
            'git push origin master',
            'git push azure master'
          ].join('&&')
        }
      },
    });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-nodemon');

  grunt.registerTask('server-dev', function (target) {
    // Running nodejs in a different process and displaying output on the main console
    var nodemon = grunt.util.spawn({
      cmd: 'grunt',
      grunt: true,
      args: 'nodemon'
    });
    nodemon.stdout.pipe(process.stdout);
    nodemon.stderr.pipe(process.stderr);

    grunt.task.run([ 'watch' ]);
  });

  ////////////////////////////////////////////////////
  // Main grunt tasks
  ////////////////////////////////////////////////////

  grunt.registerTask('test', [
    'mochaTest'
  ]);

  grunt.registerTask('build', [
    // 'jshint',
    'concat',
    'uglify',
    'cssmin'
  ]);

  grunt.registerTask('upload', function(n) {
    if(grunt.option('prod')) {
      grunt.task.run(['shell']);
    } else {
      grunt.task.run([ 'server-dev' ]);
    }
  });

  grunt.registerTask('deploy', [
    'build',
    'upload'
  ]);


};
