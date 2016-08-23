(function(app) {
  app.AppModule =
    ng.core.NgModule({
      imports: [ ng.platformBrowser.BrowserModule ],
      declarations: [ app.AppComponent ,app.AppComponent2,app.liComponent,app.canvasComponent],
      bootstrap: [ app.AppComponent ,app.AppComponent2,app.liComponent,app.canvasComponent]
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));