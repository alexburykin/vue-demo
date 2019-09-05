const puppeteer = require('puppeteer');
// const { expect } = require('chai');
const iPhone = puppeteer.devices['iPhone 6'];


let browser;
let page;

describe('Planets module', function () {

  before(async function () {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 10
    });
    page = await browser.newPage();


    await page.setViewport({
      width: 1000,
      height: 600
    });

    await page.emulate(iPhone);
    await page.goto(' http://localhost:8080/planets');
  });

  after(function () {
    // browser.close();
  });

  it('should open planets page', async function () {
    page.waitFor(1000)
  });

});
