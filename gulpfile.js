var es = require('event-stream')
var gulp = require('gulp')
var concat = require('gulp-concat')
var templateCache = require('gulp-angular-templatecache')
var ngAnnotate = require('gulp-ng-annotate')
var uglify = require('gulp-uglify')
var fs = require('fs')
var _ = require('lodash')

var scripts = require('./client/admin/app.scripts.json')

var source = {
    js: {
        main: 'client/admin/modules/app/main.js',
        src: [
            // application config
            'client/admin/app.config.js',

            // application bootstrap file
            'client/admin/modules/main.js',

            // main module
            'client/admin/modules/app.js',

            // module files
            'client/admin/modules/**/module.js',

            // other js files [controllers, services, etc.]
            'client/admin/modules/**/!(module)*.js'
        ],
        tpl: 'client/admin/modules/**/*.tpl.html'
    }
}

var destinations = {
    js: 'client/admin/build'
}

gulp.task('build', function() {
    return es.merge(gulp.src(source.js.src), getTemplateStream())
         .pipe(ngAnnotate())
         .pipe(uglify())
        .pipe(concat('app.js'))
        .pipe(gulp.dest(destinations.js))
})

gulp.task('js', function() {
    return es.merge(gulp.src(source.js.src), getTemplateStream())
        .pipe(concat('app.js'))
        .pipe(gulp.dest(destinations.js))
})

gulp.task('watch', function() {
    gulp.watch(source.js.src, ['js'])
    gulp.watch(source.js.tpl, ['js'])
})

gulp.task('vendor', function() {
    _.forIn(scripts.chunks, function(chunkScripts, chunkName) {
        var paths = []
        chunkScripts.forEach(function(script) {
            var scriptFileName = scripts.paths[script]

            if (!fs.existsSync(__dirname + '/' + scriptFileName)) {
                throw console.error('Required path doesn\'t exist: ' + __dirname + '/' + scriptFileName, script)
            }
            paths.push(scriptFileName)
        })
        gulp.src(paths)
            .pipe(concat(chunkName + '.js'))
            // .on('error', swallowError)
            .pipe(gulp.dest(destinations.js))
    })
})

gulp.task('prod', ['vendor', 'build'])
gulp.task('dev', ['vendor', 'js', 'watch'])
gulp.task('default', ['dev'])

var swallowError = function(error) {
    console.log(error.toString())
    this.emit('end')
}

var getTemplateStream = function() {
    return gulp.src(source.js.tpl)
        .pipe(templateCache({
            root: 'app/',
            module: 'app'
        }))
}
