angular.module('sabio.hacker.service', [])
  .factory('hackerService', HackerServiceFactory)

HackerServiceFactory.$inject = ['$http']

function HackerServiceFactory($http) {
  return {

    getAll: (onSuccess, onError) => {
      return $http.get('/api/hackers').then((response) => {
          onSuccess(response.data)
        })
        .catch((response) => {
          onError(response.data)
        })
    },

    get: (id, onSuccess, onError) => {
      return $http.get(`/api/hackers/${id}`).then((response) => {
          onSuccess(response.data)
        })
        .catch((response) => {
          onError(response.data)
        })
    },

    post: (hackerData, onSuccess, onError) => {
      return $http.post('/api/hackers', hackerData).then((response) => {
          onSuccess(response.data)
        })
        .catch((response) => {
          onError(response.data)
        })
    },

    put: (hackerData, onSuccess, onError) => {
      return $http.put(`/api/hackers/${hackerData._id}`, hackerData).then((response) => {
          onSuccess(response.data)
        })
        .catch((response) => {
          onError(response.data)
        })
    },

    delete: (id, onSuccess, onError) => {
      return $http.delete(`/api/hackers/${id}`).then((response) => {
          onSuccess(response.data)
        })
        .catch((response) => {
          onError(response.data)
        })
    }
  }
}