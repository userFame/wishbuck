(function () {
  "use strict";

  angular.module('sabio.base.service', [])
    .factory('baseService', BaseServiceFactory)

  BaseServiceFactory.$inject = ['$http']

  function BaseServiceFactory($http) {
    return {
      $http: $http
      , checkBaseMethod: () => {
        console.log("this is from the baseService")
      }
    }
  }

})();