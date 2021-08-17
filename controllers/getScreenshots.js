const fs = require("fs");
// const baseUrl = "http://localhost:3000/files/";

module.exports.getScreenshots = async (req, res) => {
  try {
    const directoryPath = "./screenshots/";
    console.log("direc", directoryPath);
    fs.readdir(directoryPath, function (err, files) {
      if (err) {
        res.status(500).send({
          message: "Unable to scan files!",
        });
      }

      let fileInfos = [];

      files.forEach((file) => {
        fileInfos.push({
          name: file,
        //   url: baseUrl + file,
        });
      });

      res.status(200).send(fileInfos);
    });
  } catch (err) {
    console.log(err);
  }
};
