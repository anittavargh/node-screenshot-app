const puppeteer = require("puppeteer");

module.exports.captureScreenshot = async (req, res) => {
  const { height, width, url, type, siteName } = req.body;

  try {
    let browser = await puppeteer.launch({ headless: true });
    let page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle0", timeout: 60000 });
    await page.setViewport({ width: width, height: height });
    await page.screenshot({
      path: `./screenshots/${siteName}.${type}`,
      type: `${type}`,
      fullPage: true,
    });
    await page.close();
    await browser.close();

    res.send({
      Status: 200,
      Message: "Screenshot captured",
      Data: "Screensots",
    });
  } catch (err) {
    console.log(err);
  }
};
