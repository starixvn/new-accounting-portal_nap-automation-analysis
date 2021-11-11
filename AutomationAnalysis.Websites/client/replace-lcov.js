const fs = require("fs");
const rootDir = process.argv[2];
const lcovFile = rootDir + "\\js-lcov\\lcov.info";
const replacement =
  "SF:" + rootDir + "\\AutomationAnalysis.Websites\\client\\src\\";
fs.readFile(lcovFile, "utf8", function (err, data) {
  if (err) {
    return console.log(err);
  }
  const result = data.replace(/SF:src\\/g, replacement);

  fs.writeFile(lcovFile, result, "utf8", function (fileError) {
    if (fileError) {
      return console.log(fileError);
    }
  });
});
