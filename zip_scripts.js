var zipFolder = require("zip-folder");

zipFolder("./public", "./zip/ramon-castilla.zip", function (err) {
  if (err) {
    console.log("oh no!", err);
  } else {
    console.log("EXCELLENT");
  }
});
