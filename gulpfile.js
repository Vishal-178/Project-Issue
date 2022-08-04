// gulp
const gulp = require("gulp");
// cssnano to minify the css
const cssnano = require("gulp-cssnano");
const uglify = require("gulp-uglify");
// rev to add a hash to the file name
const rev = require("gulp-rev");
const clean = require("gulp-clean");

gulp.task("css", (done) => {
  console.log("css task ...");
  gulp
    .src("./assets/**/*.css")
    .pipe(cssnano())
    .pipe(rev())
    .pipe(gulp.dest("./public/assets"))
    .pipe(
      rev.manifest({
        cwd: "public",
        merge: true,
      })
    )
    .pipe(gulp.dest("./public/assets"));
  done();
});
gulp.task("js", (done) => {
  console.log("js task ...");
  gulp
    .src("./assets/**/*.js")
    .pipe(uglify())
    .pipe(rev())
    .pipe(gulp.dest("./public/assets"))
    .pipe(
      rev.manifest({
        cwd: "public",
        merge: true,
      })
    )
    .pipe(gulp.dest("./public/assets"));
  done();
});

gulp.task("clean:assets", (done) => {
  console.log("clean task ...");
  return gulp
    .src("./public/assets", { read: false, allowEmpty: true })
    .pipe(clean());
  done();
});

gulp.task(
  "build",
  gulp.series("clean:assets", gulp.parallel("css", "js")),
  (done) => {
    console.log("build task ...");
    done();
  }
);
