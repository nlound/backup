module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'css/estilos.css' : 'css/estilos.scss'
				}
			}
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			}
		},
		uncss: {
			dist: {
				files: {
				'css/tidy.css': ['index.html']
				}
			}
		}

	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['watch']);
	grunt.loadNpmTasks('grunt-uncss');
};