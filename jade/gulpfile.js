var gulp = require("gulp");
var jade = require("gulp-jade");


gulp.task("jade", function()
{
    return gulp.src("*.jade")
               .pipe(jade())
               .pipe(gulp.dest(".."));
});


gulp.task("default", function()
{
    gulp.watch("**/*.jade", ["jade"]);
});
