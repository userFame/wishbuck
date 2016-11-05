angular.module('sabio.base.service', [])
  .factory('baseService', BaseServiceFactory)

BaseServiceFactory.$inject = ['$http']

function BaseServiceFactory($http) {
  return {
    checkBaseMethod: () => {
        console.log("this is from the baseService")
    }
  }
}
