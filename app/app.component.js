

(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: '<h1>{{title}}</h1>'
    })
    .Class({
      constructor: function() {
      	this.title = 'hero';
      	// this.hero = '伊利丹怒风'
      }
    });
})(window.app || (window.app = {}));