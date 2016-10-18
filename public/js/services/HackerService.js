angular.module('HackerService', [])
  .factory('Hacker', HackerServiceFactory)

HackerServiceFactory.$inject = ['$http']

function HackerServiceFactory ($http) {
  return {
    // call to get all hackers
    get: function () {
      return $http.get('/api/hackers')
    },

    // call to POST and create a new hacker
    create: function (data) {
      return $http.post('/api/hackers', data)
    },

    // call to DELETE a hacker
    delete: function (id) {
      return $http.delete('/api/hackers/' + id)
    }
  }
}
