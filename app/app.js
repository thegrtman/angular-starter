/**
 * Created by doguhanuluca on 4/4/15.
 */
var angular = require('angular');
var router = require('loomio-angular-router');
var home = require('./components/home/home.js');
var home = require('./components/inside-one/inside-one.js');
var home = require('./components/inside-two/inside-two.js');
var home = require('./components/nested-test/nested-test.js');
var templates = require('./tmp/templates.js');

angular.module('app', ['ngNewRouter', 'app.home', 'app.nestedTest', 'app.insideOne', 'app.insideTwo', 'templates'])
    .controller('AppController', ['$router', AppController]);

function AppController ($router) {
    $router.config([
        {path: '/home', component: 'home' },
        {path: '/nested', component: 'nestedTest'},
        {path: '/innerOne', component: 'insideOne'},
        {path: '/:anything', redirectTo: '/home'}
    ]);
}