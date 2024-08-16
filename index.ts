import express from "express";
import { URL } from "url";
import dotenv from "dotenv";
dotenv.config();
import puppeteer, { Browser } from "puppeteer";

const app = express();
const port = process.env.PORT || 5000;

const MAIN_SITE_URL = process.env.MAIN_SITE_URL || "http://localhost:3000";

let browser: Browser;

async function initBrowser() {
  browser = await puppeteer.launch({
    headless: true,
  });
}

async function renderPage(url: string): Promise<string> {
  try {
    browser = await puppeteer.launch({
      headless: true,
    });

    console.log("hitting url", url);

    const page = await browser.newPage();

    await page.setViewport({
      width: 375,
      height: 667,
      isMobile: true,
      hasTouch: true,
      deviceScaleFactor: 3,
    });

    await page.setUserAgent(
      "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"
    );

    await page.goto(url, { waitUntil: "load", timeout: 20000 });

    const content = await page.content();
    await page.close();
    return content;
  } catch (error) {
    console.error("Error in renderPage:", error);
    throw error;
  }
}

app.get("*", async (req, res) => {
  const fullUrl = new URL(req.url, MAIN_SITE_URL).toString();
  console.log("fullUrl", fullUrl);

  try {
    const renderedContent = await renderPage(fullUrl);
    res.send(renderedContent);
  } catch (error) {
    console.error("Error rendering page:", error);
    res.status(500).send("Error rendering page");
  }
});

async function serve() {
  try {
    await initBrowser();
    app.listen(port, () => {
      console.log(`⚡️ Server is running at http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
  }

  process.on("SIGINT", async () => {
    try {
      await browser.close();
      process.exit(0);
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  });
}

serve();
