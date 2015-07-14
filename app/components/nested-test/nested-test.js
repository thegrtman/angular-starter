/**
 * Created by kxg2 on 7/14/2015.
 */

var angular = require('angular');

angular.module('app.nestedTest', [])
    .controller('NestedTestController', ['$router', function ($router) {
        this.componentName = 'nestedTest';
        $router.config([
            {path: '/one', component: 'insideOne'},
            {path: '/two', component: 'insideTwo'}
        ])
    }]);