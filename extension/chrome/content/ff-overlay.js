Components.utils.import("resource://gre/modules/Services.jsm");

var keyboard_test = {
  onLoad: function() {
    // initialization code
    this.initialized = true;
    this.strings = document.getElementById("keyboard_test-strings");
  },

  onMenuItemCommand: function(e) {
    this.loadIndexPage();
  },

  onToolbarButtonCommand: function(e) {
    // just reuse the function above.  you can change this, obviously!
    this.onMenuItemCommand(e);
  },

  loadIndexPage: function() {
    this.loadInBrowser("chrome://keyboard_test/content/index.html");
  },
  
  /**
  * Opens a URL in the browser window. If browser window isn't passed as parameter,
  * this function attempts to find a browser window. If an event is passed in
  * it should be passed in to the browser if possible (will e.g. open a tab in
  * background depending on modifiers keys).
  */
  loadInBrowser: function( /**String*/ url)
  {
    let chromeWin = Services.wm.getMostRecentWindow("navigator:browser");
    let gBrowser = chromeWin.gBrowser;

    if (gBrowser)
    {
      gBrowser.selectedTab = gBrowser.addTab(url);
    }
  }
};

window.addEventListener("load", function () { keyboard_test.onLoad(); }, false);
