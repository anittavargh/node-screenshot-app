var express = require("express");
var router = express.Router();

const captureScreenshotController = require("../controllers/captureScreenshot");
const getScreenshotsController = require("../controllers/getScreenshots");
const downloadScreenshotsController = require("../controllers/downloadScreenshots");

router.post("/capture", captureScreenshotController.captureScreenshot);
router.get("/get", getScreenshotsController.getScreenshots);
router.post("/download", downloadScreenshotsController.downloadScreenshots);

module.exports = router;
