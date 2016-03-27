/*global angular*/
(function() {
    'use strict';

    angular.module('myApp.controllers', [])
    .controller('BarChartCtrl', BarChartCtrl)
     .controller('ChartCtrl', ChartCtrl);
    

    function ChartCtrl() {
        var vm = this;

        vm.chartObject = {
            type: 'PieChart',
            data: {
                "cols": [{
                    label: 'frameworks',
                    type: 'string'
                }, {
                    label: 'shares',
                    type: 'number'
                }],
                "rows": [{
                    c: [{
                        v: "Angular.js"
                    }, {
                        v: 54
                    }]
                }, {
                    c: [{
                        v: "Backbone.js"
                    }, {
                        v: 9
                    }]
                }, {
                    c: [{
                        v: "Ember.js"
                    }, {
                        v: 2
                    }]
                }, {
                    c: [{
                        v: "Knockout"
                    }, {
                        v: 21
                    }]
                }, {
                    c: [{
                        v: "Others"
                    }, {
                        v: 14
                    }]
                }]
            }
        };
    }

    function BarChartCtrl() {
        var vm = this;

        vm.container = {
            width: 300,
            height: 300,
            gap: 10
        };

        vm.bars = [{
            color: 'blue',
            percentage: 50
        }, {
            color: 'orange',
            percentage: 60
        }, {
            color: 'red',
            percentage: 10
        }];

        vm.setContainer = function() {
            return {
                'padding-right': vm.container.gap + 'px',
                'width': vm.container.width + 'px',
                'height': vm.container.height + 'px'
            };
        };

        vm.setDetails = function(bar, index) {
            var barWidth = (vm.container.width / vm.bars.length) - vm.container.gap;
            return {
                height: bar.percentage + '%',
                background: bar.color,
                width: barWidth + 'px',
                left: vm.container.gap + (vm.container.gap + barWidth) * index + 'px'
            }
        }
    }

})();