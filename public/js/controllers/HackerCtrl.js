angular.module('HackerCtrl', [])
  .controller('HackerController', HackerController)

HackerController.$inject = ['Hacker']

function HackerController(Hacker) {
  'use strict'
  var vm = this
  vm.tagline = 'Mess with the best, die like the rest.'
  vm.formData = {}
  vm.create = _create
  vm.remove = _remove

  Hacker.get()
    .then(_onSuccess, _onError)

  function _create() {
    Hacker.create(vm.formData)
      .then(_onSuccess, _onError)
  }

  function _remove(id) {
    Hacker.delete(id)
      .then(_onSuccess, _onError)
  }

  function _onSuccess(data) {
    vm.formData = null
    vm.hackers = data
    console.log(data)
  }

  function _onError(data) {
    console.log('Error: ' + data)
  }
}
