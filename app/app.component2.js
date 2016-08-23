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
            setTimeout(function () {
                var canvas = document.getElementById('myCanvas');
                console.log(canvas);
                var ctx = null;
                if(canvas.getContext){
                    ctx = canvas.getContext('2d');
                }
                var image = new Image();
                // image.onload = function () {
                //     ctx.drawImage(image,100,100);
                // }
                image.src = '../images/log.png';
                var imageData = ctx.getImageData(300,200,300,200);
                console.log(imageData)
                var parts = [];
                function calculate() {
                    var cols,rows = 100;
                    var s_width = parseInt(image.w/cols);
                    var s_height = parseInt(image.h/rows);
                    var pos = 0;
                    var par_x,par_y;
                    var data =image.imageData.data;
                    for(var i = 0;i<=cols;i++){
                        for(var j = 1;j<=rows;j++){
                            pos = [(j*s_height-1)*image.w+(i*s_width-1)]*4;
                            if(data[pos]>250){
                                var part = {
                                    x:image.x + i*s_width+(Math.random()-0.5)*20,
                                    j:image.y + j*s_height+(Math.random()-0.5)*20,
                                    fillStlye:'#006eff'
                                }
                                parts.push(part)
                            }
                        }
                    }
                    console.log(parts)
                }
                function draw() {
                    ctx.clearRect(0,0,canvas.w,canvas.h);
                    var len = parts.length,curr_parts = null;

                    for(var i = 0;i<len;i++){
                        curr_parts = parts[i];
                        ctx.fillStyle = curr_parts.fillStyle;
                        ctx.fillRect(curr_parts.x,curr_parts.y,1,1)
                    }
                }
                calculate();
                draw();
            },300)

        }
    })
})(window.app || (window.app = {}));