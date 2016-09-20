/**
 * Created by caiyongbin on 2016/9/20.
 */
(function (app) {
    app.headerComponent = ng.core.Component({
        selector:'app-header',
        templateUrl:'../views/header.html',
        stylesUrl:['../style/header.css'],
        animations:[
            trigger('state',[(
                state('inactive',style({
                backgroundColor:'#333',
                transform:'scale(1)'
                })),
                state('active',style({
                    backgroundColor:'#cfd8dc',
                    transform:'scale(1.1)'
                }),
                transition('inactive => active',animate('300ms ease-in'))))])
        ]
    }).Class({
        constructor:function () {
            var trigger = ng.core.trigger;
            var state = ng.core.state;
            var style = ng.core.style;
            var transition = ng.core.transition;
            var animate = ng.core.animate
            this.fn = fn = {};
            this.data =data = {};
            fn.logout = function () {
                console.log('logout');
            }
        }
    })
})(window.app || (window.app={}))
