angular.module('testApp', ['ui.router', 'ngAnimate', 'ngTouch', 'ui.bootstrap'])

.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
     .state('home', {
       url: '/',
       template: "<home></home>"
     })
     .state('about', {
       url: '/about',
       templateUrl:"./views/about/about.html",
       controller: "aboutController"
     })
     .state('qualifications', {
       url: '/qualifications',
       templateUrl:"./views/qualifications/qualifications.html",
       controller: 'qualificationsController'
     })
     .state('apply', {
       url: '/apply',
       templateUrl:"./views/apply/apply.html",
       controller: 'applyController'
     });
})
