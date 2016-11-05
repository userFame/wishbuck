angular.module('sabio.authentication.service', [])
  .factory('authenticationService', AuthenticationServiceFactory)

AuthenticationServiceFactory.$inject = ['$http', 'baseService']

function AuthenticationServiceFactory($http, baseService) {

  const authenticationService = Object.create(baseService)

  authenticationService.register = (userData, onSuccess, onError) => {
    return $http.post('/api/users/register', userData).then((response) => {
      onSuccess(response.data)
    }, (response) => {
      onError(response.data)
    })
  }

  authenticationService.signin = (userData, onSuccess, onError) => {
    return $http.post('/api/users/login', userData).then((response) => {
      onSuccess(response.data)
    }, (response) => {
      onError(response.data)
    })
  }

  return authenticationService
  
}
