const thirdPartyDependencies = ['ui.router']

const defaultDependencies = [
    'appRoutes',
    'HackerCtrl',
    'HackerService',
    'HackerSingleCtrl',
    'MainCtrl',
]

const arrOfDep = defaultDependencies.concat(thirdPartyDependencies)

angular.module('SabioApp', arrOfDep)
