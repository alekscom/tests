module.exports = {
  'Check if info box collapsing': async function (browser) {
    await browser.url('https://www.tushyraw.com/red-eye');
    await browser.click("button[data-test-component='MoreInfoBarButton']");
    await browser.expect.element("div[data-test-component='MoreInfoSection']").to.not.be.present;
    await browser.click("button[data-test-component='MoreInfoBarButton']");
    await browser.expect.element("div[data-test-component='MoreInfoSection']").to.be.present;
  },
};


