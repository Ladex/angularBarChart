/*global angular*/
(function() {
    'use strict';

    angular.module('myApp.controllers', []).controller('BarChartCtrl', BarChartCtrl);

    function BarChartCtrl() {
        var vm = this;

        vm.container = {
            width: 300,
            height: 300,
            gap: 10
        };

        vm.bars = [{color: 'blue', percentage: 50 }, 
        {color: 'orange',percentage: 60 }, 
        {color: 'red', percentage: 10 }];
        
        vm.setContainer = function(){
            return{
                'padding-right': vm.container.gap + 'px',
                'width': vm.container.width + 'px',
                'height': vm.container.height + 'px'
            };
        };
        
        vm.setDetails = function(bar, index){
            var barWidth = (vm.container.width / vm.bars.length) - vm.container.gap;
            return{
                height: bar.percentage + '%',
                background: bar.color,
                width: barWidth + 'px',
                left: vm.container.gap + (vm.container.gap + barWidth) * index + 'px'
            }
        }
    }

})();