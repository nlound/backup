const dest = './build';
const src = './src';

module.exports = {

    // SASS configuration
    sass: {
        src: src + '/**/*.scss',
        dest: dest + '/assets/css',
        outputName: 'garage-personal.css',
        options: {
            outputStyle: 'expanded'
        }
    },

    //javascript configuration
    js: {
        src: src + '/*.js',
        dest: dest + '/assets/js',
        outputName: 'main.js'
    },

    //html configuration
    html: {
        src: src + '/*.html',
        dest: dest + '/'
    },

    // assets copy config
    assets: {
        src: [
            src + '/assets/**/*'
        ],
        dest: dest + '/assets'
    },

    // imagemin config
    imagemin: {
        src: src + '/assets/images/**/*',
        dest: dest + '/assets/images'
    },

    // clean configuration
    clean: {
        src: dest,
        options: {
            read: false
        }
    },

    browserSync: {
        server: {
            baseDir: dest
        }
    },

    watch:{
        js: [src + '/*.js'],
        html: [src + '/*.html']
    }

}