angular.module('sabio.appRoutes', [])
  .config(RouteConfig)

RouteConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

function RouteConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'views/home.html',
      controller: 'MainController as main'
    })
    .state('hackers', {
      url: '/hackers',
      templateUrl: 'views/hackers.html',
      controller: 'hackerController as hacker'
    })
    .state('hackerSingle', {
      url: '/hackers/:id',
      templateUrl: 'views/hacker_single.html',
      controller: 'hackerController as hacker'
    })
    .state('register', {
      url:'/register',
      templateUrl: 'views/register.html',
      controller: 'authenticationController as login'
    })
    .state('login', {
      url:'/login',
      templateUrl: 'views/login.html',
      controller: 'authenticationController as login'
    })

  $locationProvider.html5Mode(true)
}
