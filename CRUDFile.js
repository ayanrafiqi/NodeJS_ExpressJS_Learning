// Creating 5 new files with same content by specifying the path directory
//using path inbuild file non-Global module , and applying various FSoperation those files on terminal.

const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "Files");
const filePath = `${dirPath}/fruit.txt`;

console.log(dirPath);
for (i = 0; i < 5; i++) {
  fs.writeFileSync(`${dirPath}/hello ${i}`, "this is me doing my job");
}

fs.readdir(dirPath, (err, Files) => {
  Files.forEach((item) => {
    console.log("the file name is", item);
  });
});

fs.appendFile(filePath, " and I like mangoes very much", (err) => {
  if (!err) {
    console.log("file is updated");
  }
});
fs.rename(filePath, `${dirPath}/fruit.txt`, (err) => {
  if (!err) console.log("file name is updated");
});

fs.unlinkSync(`${dirPath}/fruit.txt`);
