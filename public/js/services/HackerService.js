angular.module('HackerService', [])
  .factory('Hacker', HackerServiceFactory)

HackerServiceFactory.$inject = ['$http']

function HackerServiceFactory ($http) {
  return {
    // call to get all hackers
    get: function () {
      return $http.get('/api/hackers')
    },

    // these will work when more API routes are defined on the Node side of things
    // call to POST and create a new hacker
    create: function (hackerData) {
      return $http.post('/api/hackers', hackerData)
    },

    // call to DELETE a hacker
    delete: function (id) {
      return $http.delete('/api/hackers/' + id)
    }
  }
}
