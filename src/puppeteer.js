const puppeteer = require('puppeteer');
let cnf = require('../config/config.json');
let run = async function () {

    // set up Puppeteer
    const browser = await puppeteer.launch({
        headless: cnf.settings.headless,
        args: ['--no-sandbox']
    });

    const page = await browser.newPage();
   // await page.setExtraHTTPHeaders({
     //   'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8'
   // });
  //  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36');
   // await page.setRequestInterception(true);
    // page.setViewport({ width: 1200, height: 764 });
    await page.goto('https://www1.ticketmaster.com/event/3B0054CDD5532C65?bba=1');
    await page.waitFor(5000);
    await page.click(cnf.selectors.seeTickets_button);
    await page.waitFor(10000);
    await page.click(cnf.selectors.firstRow_Link);
    await page.waitFor(5000);
    await page.click(cnf.selectors.getTickets_button);
    // Close browser
   // browser.close();
};

module.exports = run;