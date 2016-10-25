angular.module('appRoutes', [])
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
      controller: 'HackerController as hacker'
    })
    .state('hackerSingle', {
      url: '/hackers/:name',
      templateUrl: 'views/hacker_single.html',
      controller: 'HackerSingleController as hackerSingle'
    })

  $locationProvider.html5Mode(true)
}
