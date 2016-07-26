angular.module('testApp', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            template: "<home></home>"
        })
        .state('terms', {
            url: '/terms',
            templateUrl: './views/terms/terms.html',
        })
        .state('about', {
            url: '/about',
            templateUrl: "./views/about/about.html",

        })
        .state('qualifications', {
            url: '/qualifications',
            templateUrl: "./views/qualifications/qualifications.html",

        })

// *************** User Section *******************

        .state('apply1', {
            url: '/apply1',
            templateUrl: "./views/apply/apply-html/apply1.html",
            controller: 'applyController'
        })

        .state('apply3', {
            url: '/apply/completedapp',
            templateUrl: './views/apply/apply-html/apply3.html',
            controller: 'applyController'
        })
        .state('login', {
            url: '/login/login',
            templateUrl: './views/login/login.html',
            controller: 'loginController'

        })
        .state('loginchoice', {
            url: '/login/loginchoice',
            templateUrl: './views/login/loginchoice.html',

        })
        .state('userpage', {
            url: '/userpage',
            templateUrl: './views/userpage/userpage.html',
            controller: 'retrieveController',
            resolve: {
                user: function(authService, $state) {
                    return authService.getCurrentUser().then(function(response) {
                        if (!response.data)
                            $state.go('login');
                        return response.data;
                    }).catch(function(err) {
                        $state.go('login');
                    });
                }
            }
        })


// ****************** Employee Section *******************

        .state('employeelogin', {
            url: '/login/employeelogin',
            templateUrl: './views/login/employeelogin.html',
            controller: 'loginController'

        })
        .state('employeepage', {
            url: '/employeepage',
            templateUrl: './views/employeefolder/employee-html/employee.html',
            controller: 'employeeController',
            resolve: {
                user: function(authService, $state) {
                    return authService.getCurrentEmployee().then(function(response) {
                        if (!response.data)
                            $state.go('employeelogin');
                        return response.data;
                    }).catch(function(err) {
                        $state.go('employeelogin');
                    });
                }
            }
        });
  // ********************************************************
  
})
