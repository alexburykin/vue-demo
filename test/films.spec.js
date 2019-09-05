const puppeteer = require('puppeteer');
const { expect } = require('chai');

let browser;
let page;

describe('Films module', function () {

  before(async function () {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 10
    });
    page = await browser.newPage();
    await page.setViewport({width: 1000, height: 600});
    await page.goto(' http://localhost:8080/films');
  });

  after(function () {
    browser.close();
  });

  it('should open films page', async function () {
    let titleInner = await page.evaluate(() => document.querySelector('.title').innerHTML);
    expect(titleInner).to.be.equal('Films')
  });

  it('should search needed film', async function () {
    await page.type('input[placeholder="Type your query"]', 'of the');
    await page.waitFor(5000);
    let searchResultLength = await page.evaluate(() => {
      let body = document.querySelector('.table tbody');
      return body.querySelectorAll('tr').length;
    });
    expect(searchResultLength).to.be.equal(3);
  });

});
