const dest = './build';
const src = './src/static';

module.exports = {

    // SASS configuration
    sass: {
        src: [ src + '/scss/*.scss' , src + '/components/**/*.scss' ],
        dest: dest + '/assets/css',
        outputName: 'styles.css',
        options: {
            outputStyle: 'expanded'
        }
    },

    //javascript configuration
    js: {
        src: [src + '/pages/**/*.js' , src + '/components/**/*.js'],
        dest: dest + '/assets/js',
        outputName: 'app.js'
    },

    libConcat: {
        src: [src + '/assets/vendor/*.js'],
        dest: dest + '/assets/js',
        outputName: 'libs.js'
    },

    concatJs: {
        src: [src + '/*.js'],
        dest: dest + '/assets/js',
        outputName: 'tbnyapp.js',
        outputNameMin: 'tbnyapp.min.js'
    }, 

    //json configuration
    json: {
        src: src + '/json/*.json',
        dest: dest + '/json'
    },

    // assets copy config
    assets: {
        src: [
            src + '/assets/**/*',
            !src + '/assets/images/*'
        ],
        dest: dest + '/assets'
    },

    // imagemin config
    imagemin: {
        src: src + '/assets/images/**/*',
        dest: dest + '/assets/images'
    },

    // PUG configuration
    pug: {
        src: src + '/pages/**/*.pug',
        dest: dest
    },

    // clean configuration
    clean: {
        src: dest,
        options: {
            read: false
        }
    },

    browserSync: {
        proxy: "http://localhost:5000",
        files: ["build/*.*"],
        open: false,
        port: 3000
    },

    watch:{
        pug: [src + '/pages/*.pug', src + '/templates/*.pug', src + '/components/**/*.pug', src + '/data/*.pug'],
        js: [src + '/*.js'],
        json: [src + '/json/*.json']
    },

    express: {
        port: 5000,
    },

    nodemon: {
        script: './src/app.js'
    }


}