const puppeteer = require('puppeteer');
const { expect } = require('chai');

let browser;
let page;

describe('Auth module', function () {

  before(async function () {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 10
    });
    page = await browser.newPage();
    await page.goto(' http://localhost:8080/login');
  });

  after(function () {
    browser.close();
  });

  it('should open login page', async function () {
    let titleInner = await page.evaluate(() => document.querySelector('.title').innerHTML);
    expect(titleInner).to.be.equal('Log in')
  });

  it('should allow to input email', async function () {
    // await page.$('input[name="email"]').type()
    await page.type('input[name="email"]', 'antonboksha@gmail.com');
    await page.type('input[name="password"]', 'testpass');

    await page.click('button[type="submit"]');
    await page.waitForNavigation({waitUntil: 'networkidle0'});

    let titleInner = await page.evaluate(() => document.querySelector('.title').innerHTML);
    expect(titleInner).to.be.equal('Planets')
  });

});
