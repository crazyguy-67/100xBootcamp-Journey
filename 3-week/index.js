const fs = require("fs");

fs.readFile("a.txt", "utf-8", function (err, contents) {
  if (err) {
    console.log(err);
    return;
  }

  console.log(contents);
});

fs.readFile("b.txt", "utf-8", function (err, contents2) {
  if (err) {
    console.log(err);
    return;
  }

  console.log(contents2);
});

console.log("Done starting file reads");
