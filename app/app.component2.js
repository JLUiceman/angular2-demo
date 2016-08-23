(function(app) {
  app.AppComponent2 =
    ng.core.Component({
      selector: 'your-app',
      templateUrl: 'views/title.html'
    })
    .Class({
      constructor: function() {
        this.data = {};
        this.data.title = "伊利丹怒风";
      	this.title = '伊利丹怒风';
        this.alert = function(){
          alert('click事件');
        }
        this.show = function(){
            this.data.show = !this.data.show;
        }
      }
    });
    app.liComponent = ng.core.Component({
        selector:'other-app',
        template:'<ul><li *ngFor="let item of arr;let i = index">{{item}}</li></ul>'
    }).Class({
        constructor:function () {
            this.arr = [1,2,3,4,5]
        }
    });
    app.canvasComponent = ng.core.Component({
        selector:'my-img',
        template:'<canvas id="myCanvas" width="600" height="600">您的浏览器暂不支持canvas</canvas>'
    }).Class({
        constructor:function () {
            var canvas = document.getElementById('myCanvas');
            var ctx = null;
            if(canvas.getContext){
                ctx = canvas.getContext('2d');
            }
        }
    })
})(window.app || (window.app = {}));