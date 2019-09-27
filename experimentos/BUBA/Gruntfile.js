module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: {
                    'public/styles/base.css': 'public/styles/base.scss'
                }
            }
        },
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['sass']
            }
        },
        concat: {   
           options: {
            separator: ';'  
          },
          dist: {
            src: // Archivos a concatenar
                [
                    'public/bower_components/jquery/dist/jquery.js' , 
                    'public/bower_components/modernizr/modernizr.js' , 
                    'public/bower_components/fastclick/lib/fastclick.js' , 
                    'public/scrips/st.min.js'
                ],
            dest: 'public/scripts/librerias.js'   // Archivo de salida
          }
        }


    });


    //Modulos a utilizar    
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');


    //Tareas
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('prod', ['concat']); 
};
