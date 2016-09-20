(function(app) {
  app.AppModule =
    ng.core.NgModule({
      imports: [ng.platformBrowser.BrowserModule,ng.forms.FormsModule,ng.router.RouterModule],
        declarations: [ app.headerComponent],
        bootstrap: [ app.headerComponent]
    })
    .Class({
      constructor: function() {
            console.log(ng)
      }
    });
    var routes = [{
        // path:'route1',component
    }]
})(window.app || (window.app = {}));