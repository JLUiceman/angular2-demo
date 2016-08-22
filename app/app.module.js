(function(app) {
  app.AppModule =
    ng.core.NgModule({
      imports: [ ng.platformBrowser.BrowserModule ],
      declarations: [ app.AppComponent ,app.AppComponent2],
      bootstrap: [ app.AppComponent ,app.AppComponent2]
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));