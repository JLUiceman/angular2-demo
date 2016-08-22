(function(app) {
  app.AppModule =
    ng.core.NgModule({
      imports: [ ng.platformBrowser.BrowserModule ],
      declarations: [ app.AppComponent ,app.AppComponent2,app.liComponent],
      bootstrap: [ app.AppComponent ,app.AppComponent2,app.liComponent]
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));