const thirdPartyDependencies = ['ui.router', 'ui.bootstrap']

const defaultDependencies = [
    'sabio.appRoutes',
    'sabio.base',
    'sabio.hacker',
    'sabio.authentication',
    'MainCtrl'
]

const arrOfDep = thirdPartyDependencies.concat(defaultDependencies)

angular.module('SabioApp', arrOfDep)

angular.module('sabio.base', ['sabio.base.controller', 'sabio.base.service'])

angular.module('sabio.authentication', ['sabio.authentication.controller', 'sabio.authentication.service'])

angular.module('sabio.hacker', ['sabio.hacker.controller', 'sabio.hacker.service'])
