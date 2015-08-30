var config = {
  paths: {
    styli: 'src/styli.styl',
    styles: 'src/**/*.styl'
  },
  tasks: {
    clean: {
      fn: function(cb, tools, gulp) {
        tools.del(['css'], cb);
      }
    },
    styli: {
      deps: ['clean'],
      src: 'styli',
      dest: 'css',
      run: [
        'stylus',
        {
          autoprefixer: {
            browsers: ['last 1 version', '> 2%']
          }
        },
        'dest',
        'minifyCss', { rename: {suffix: '.min'} }, 'dest',
        { livereload: {start: true} }
      ]
    },
    watch: {
      styles: 'styli'
    },
    default: ['watch', 'styli'],
  },
  tools: {
    del: 'del'
  }
}

var engulf = require('engulf');
engulf.importTools();
engulf.run(config);
