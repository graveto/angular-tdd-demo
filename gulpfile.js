var gulp = require("gulp");
var browserSync = require("browser-sync");

gulp.task("serve", function() {
  browserSync.init({
    notify: false,
    port: 8888,
    server: {
      baseDir: ["app"],
      routes: {
        "/lib": "lib"
      }
    }
  });
  gulp.watch(["app/**/*.*"]).
    on("change", browserSync.reload);
});

