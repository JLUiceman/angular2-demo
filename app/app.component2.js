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
            var img =new Image();
            img.src = "../../images/log.png";
            console.log(img)
            setTimeout(function () {
                var canvas = new Particles({
                    canvasId:'myCanvas',
                    imgUrl:'../../images/isux.png',
                    cols:100,
                    rows:100,
                    startX: 700,
                    startY: 600,
                    imgX: 500,
                    imgY: 130,
                    delay: 100,
                    duration: 2000,
                    interval: 6,
                    fillStyle: 'rgba(26,145,211,1)',
                    particleOffset: 2,
                    ease: 'easeInOutBack'
                });
                canvas.animate();
            },300)
        }
    })
})(window.app || (window.app = {}));