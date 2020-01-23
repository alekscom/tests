/* module.exports = {
  'Check if video is free and full': async function (browser) {
    await browser.url('https://www.tushyraw.com/red-eye');
    await browser.click("div[data-test-component='VideoCoverWrapper']");
    const duration = await browser.getValue('span.vjs-duration-display');
    if (duration.value > 15) {
      await browser.assert.containsText('h3','Free Scene')
    } else {
      await browser.assert.not.containsText('h3','Free Scene')
    }
    await browser.end();
  },
};
*/