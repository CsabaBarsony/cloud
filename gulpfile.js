var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var reactify = require('reactify');
var sass = require("gulp-sass");
//var uglify = require("gulp-uglify");
//var streamify = require("gulp-streamify");

function compileJs(){
	return browserify('./src/scripts/app.js', { debug: true })
		.transform(reactify)
		.bundle()
		.pipe(source('app.js'))
		//uglify:
		//.pipe(streamify(uglify()))
		.pipe(gulp.dest('./public/js'));
}

function compileSass(){
	gulp.src("./src/styles/app.scss")
		.pipe(sass())
		.pipe(gulp.dest("./public/css"));
}



gulp.task('compile', function() {
	compileJs();
	compileSass();
});

gulp.task("default", function(){
	compileJs();
});

gulp.task('compileJs', function() {
	compileJs();
});

gulp.task('compileSass', function() {
	compileSass();
});

gulp.task("watch", function() {
	compileJs();
	compileSass();
	gulp.watch('./src/scripts/**/*.js', ['compileJs']);
	gulp.watch('./src/styles/**/*.scss', ['compileSass']);
});

gulp.task("sass", function(){
	compileSass();
});

/*// Good settings:
function jest(){
	gulp.src('__tests__').pipe(jest({
		"scriptPreprocessor": "../preprocessor.js",
		"unmockedModulePathPatterns": [
			"react"
		],
		"setupEnvScriptFile": "../before_test.js"
	}));
}

// preprocessors.js
var ReactTools = require('react-tools');

module.exports = {
	process: function(src) {
		return ReactTools.transform(src);
	}
};

// before_test.js
React = require("react");*/