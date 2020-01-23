 module.exports = {
  'Click "Get access" button': function (browser) {
    browser
    .useXpath()
      .url('https://www.tushyraw.com/red-eye')
      .click("//div[data-test-component='VideoCoverWrapper']")
//      .getValue("span.vjs-duration-display", function(result) {
 //     let duration = result;})
        browser.element("//span.vjs-duration-display", function(result){
            if (result.value > 15) {
                browser.assert.containsText('h3','Free Scene')
                browser.end();
            } else {
                browser.assert[not].containsText('h3','Free Scene')
                browser.end();
            }
        });
  },
}; 



