

(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      templateUrl:'../views/header.html',
      styleUrls:['../style/header.css']
    })
    .Class({
      constructor: function() {
          function Hero(title,name) {
              this.title = title;
              this.name = name;
          }
           this.hero = new Hero('名字','伊利丹怒风')
          this.test = ''
      }
    });
})(window.app || (window.app = {}));