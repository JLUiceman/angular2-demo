/**
 * Created by caiyongbin on 2016/9/22.
 */
(function (app) {
    var _this = this;
    var trigger = ng.core.trigger;
    var state = ng.core.state;
    var style = ng.core.style;
    var transition = ng.core.transition;
    var animate = ng.core.animate
    app.slideComponent = ng.core.Component({
        selector:'app-slide',
        templateUrl:'../views/slideComponent.html',
        stylesUrl:['../style/slide.css'],
        animations:[
            trigger('liState',[
                state('inactive',style({
                    backgroundColor:'#333',
                    transform:'scale(1)'
                })),
                state('active',style({
                    backgroundColor:'#cfd8dc',
                    transform:'scale(1.1)'
                })),
                transition('inactive=>active',animate('300ms ease-in')),
                transition('active=>inactive',animate('300ms ease-in'))
            ])
        ]
    }).Class({
        constructor:function () {
            this.fn = fn = {};
            this.slide = [
                {
                    title:'性能分析',
                    id:0,
                    state:'active'
                },{
                    title:'数据统计',
                    id:1,
                    state:'active'
                }
            ];
            fn.active = function (item) {
                console.log(item.id)
                item.state =item.state=='active'?'inactive':'active'
            }
        }
    })
})(window.app || (window.app = {}))