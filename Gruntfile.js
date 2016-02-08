module.exports = function(grunt)
{
	grunt.initConfig(
	{
		pkg: grunt.file.readJSON('package.json'),
		// Metadata
		meta:
		{
			src:
			{
				base: './src',
				styles: '<%= meta.src.base %>/sass',
				scripts: '<%= meta.src.base %>/app',
			},
			dist:
			{
				base: './dist',
				styles: '<%= meta.dist.base %>/css',
				scripts: '<%= meta.dist.base %>/app',
			},
			bower: './bower_components/',
			env:
			{
				staging:
				{
					user: 'tikifez',
					host: 'leapliving.com',
					path: '/var/www/leapliving.com/stage'
				},
				production:
				{
					user: 'tikifez',
					host: 'leapliving.com',
					path: '/var/www/leapliving.com'
				}
			}
		},
		// ng-annotate to prep angular code for minification
		// ngAnnotate: { },
		// Uglify (minify + mangle)
		// uglify: { },
		// Concatenate JS
		concat:
		{
			options:
			{
				separator: "\n;\n",
			},
			dist:
			{
				src: [
					'<%= meta.src.scripts %>/**/*.js',
					'!<%= meta.src.scripts %>/**/*_test.js',
					'!<%= meta.src.scripts %>/bower_components/**/*',
				],
				dest: '<%= meta.dist.scripts %>/main.js',
			},
		},
		// Compile sass
		sass:
		{
			dist:
			{
				files:
				{
					'<%= meta.dist.styles %>/styles.css':
					'<%= meta.src.styles %>/main.scss'
				}
			}
		},
		// Copy web pages
		copy:
		{
			main:
			{
				files: [
				{
					expand: true,
					cwd: 'src/',
					src: ['app/**', '*.php', 'img/**', 'js/lib/**', 'vendor/**',
						'*.html', '*.js', '*.css', '*.json'
					],
					dest: '<%= meta.dist.base %>'
				}]
			},
		},
		// Watch
		watch:
		{
			sass:
			{
				files: ['<%= meta.src.styles %>/**/*.scss'],
				tasks: ['sass']
			},
			pages:
			{
				files: ['<%= meta.src.base %>/*.php',
					'<%= meta.src.base %>/app/**',
					'<%= meta.src.base %>/img/**',
				],
				tasks: ['copy', 'wiredep']
			},
			scripts:
			{
				files: ['<%= meta.src.scripts %>/**/*.js'],
				tasks: ['concat']
			}
		},
		rsync:
		{
			options:
			{
				args: ['--verbose'],
				exclude: ['.git*', '*.scss', 'node_modules'],
				recursive: true
			},
			head:
			{
				options:
				{
					src: '<%= meta.dist.base %>/',
					dest: '<%= meta.env.staging.path %>/' + 'HEAD/',
					host: '<%= meta.env.staging.user %>@<%= meta.env.staging.host %>',
					delete: false // Careful this option could cause data loss, read the docs!
				}
			},
			tag:
			{
				options:
				{
					src: '<%= meta.dist.base %>/',
					dest: '<%= meta.env.staging.path %>/' + grunt.option(
						'tag'),
					host: '<%= meta.env.staging.user %>@<%= meta.env.staging.host %>',
					delete: false // Careful this option could cause data loss, read the docs!
				}
			},
			stage:
			{
				options:
				{
					src: '<%= meta.dist.base %>/',
					dest: '<%= meta.env.staging.path %>/',
					host: '<%= meta.env.staging.user %>@<%= meta.env.staging.host %>',
					delete: false // Careful this option could cause data loss, read the docs!
				}
			},
			prod:
			{
				options:
				{
					src: '<%= meta.dist.base %>/',
					dest: '<%= meta.env.production.path %>',
					host: '<%= meta.env.production.user %>@<%= meta.env.production.host %>',
					delete: false // Careful this option could cause data loss, read the docs!
				}
			}
		},
		wiredep:
		{
			target:
			{
				src: '<%= meta.src.base %>/index.html' // point to your HTML file.
			},
			options: {
        cwd: '<%= meta.src.base %>/'
      }

		},
	});
	require('load-grunt-tasks')(grunt);
	var tag = grunt.option('tag') || 'HEAD';
	grunt.registerTask('default', ['sass', 'concat']);
};
