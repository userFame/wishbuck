const thirdPartyDependencies = ['ui.router']

const defaultDependencies = [
    'appRoutes',
    'HackerCtrl',
    'HackerService',
    'HackerSingleCtrl',
    'MainCtrl'
]

const arrOfDep = thirdPartyDependencies.concat(defaultDependencies)

angular.module('SabioApp', arrOfDep)
