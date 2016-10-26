angular.module('HackerService', [])
  .factory('Hacker', HackerServiceFactory)

HackerServiceFactory.$inject = ['$http']

function HackerServiceFactory ($http) {
  return {
    // call to get all hackers
    getAll: () => {
      return $http.get('/api/hackers')
    },

    get: (name) => {
      return $http.get(`/api/hackers/${name}`)
    },

    // these will work when more API routes are defined on the Node side of things
    // call to POST and create a new hacker
    post: (hackerData) => {
      return $http.post('/api/hackers', hackerData)
    },

    put: (hackerData) => {
      return $http.put(`/api/hackers/${hackerData._id}`, hackerData)
    },

    // call to DELETE a hacker
    delete: (name) => {
      return $http.delete(`/api/hackers/${name}`)
    }
  }
}
