/* global angular */
'use strict'

angular.module('app.home')
    .factory('HomeService', HomeServiceFactory)

HomeServiceFactory.$inject = ['$http']

function HomeServiceFactory($http) {
    return {
        ping: ping
    }

    function ping(onSuccess, onError) {
        $http.get('/api/hackers/ping')
                .then(function(response) {
                    onSuccess(response.data)
                })
                .catch(function(response) {
                    onError(response.data)
                })
    }
}
