  module.exports = {
  'Click "Get access" button': function (browser) {
    browser
      .url('https://www.tushyraw.com/red-eye')
      .click("button[data-test-component='SignUpButton']")
      .assert.urlContains('joinnow')
      .end();
  },
}; 