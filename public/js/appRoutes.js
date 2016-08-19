angular.module('appRoutes', [])
  .config(RouteConfig)

RouteConfig.$inject = ['$routeProvider', '$locationProvider']

function RouteConfig ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'MainController as main'
    })
    .when('/hackers', {
      templateUrl: 'views/hacker.html',
      controller: 'HackerController as hacker'
    })

  $locationProvider.html5Mode(true)
}
