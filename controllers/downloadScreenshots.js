
module.exports.downloadScreenshots = async (req, res) => {
  try {
    const fileName = req.body.name;
    const directoryPath = "./screenshots/";
  
    res.download(directoryPath + fileName, fileName, (err) => {
      if (err) {
        res.status(500).send({
          message: "Could not download the file. " + err,
        });
      }
    });
    
  } catch (err) {
    console.log(err);
  }
};