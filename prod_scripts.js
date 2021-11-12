var fs = require("fs");
var del = require("del");
var copy = require("recursive-copy");
var replace = require("replace");

// Delete all public files
del(["./public/*"]).then((paths) => {
    console.log("Deleted files and folders:\n", paths.join("\n"));

    copyfile();
});

// Copy files from src to public
var copyfile = function() {
    // Source elements
    var options = {
        filter: [
            "css/**/*",
            "fonts/**/*",
            "data/*",
            // Images
            "img/**/*",
            "img/portada.mp4",

            // JS vendor files
            "js/vendor/jquery.min.js",
            "js/vendor/materialize.min.js",

            // Own javascript files
            "js/modules/*.js",
            "js/app.js",

            // HTML
            "index.html",
            "en.html",
            "!.DS_Store",
            "!README.html",
            "!index.html",
        ],
    };
    copy("src", "public/", options)
        .then(function(results) {
            console.info("Copied " + results.length + " files");
        })
        .catch(function(error) {
            console.error("Copy failed: " + error);
        });

    // Index
    copy("src", "public/", { filter: ["index.html", "audios.html"] })
        .then(function(results) {
            // addSourcePath();
            console.info("Copied " + results.length + " files");
        })
        .catch(function(error) {
            console.error("Copy failed: " + error);
        });

    // var addSourcePath = function() {
    //   // Edit index.html
    //   replace({
    //     regex: 'src="',
    //     replacement: 'src="source/',
    //     paths: ['./public/index.html', './public/audios.html'],
    //     recursive: true,
    //     silent: true
    //   });
    // };
};