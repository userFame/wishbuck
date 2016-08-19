angular.module('HackerCtrl', [])
  .controller('HackerController', HackerController)

HackerController.$inject = ['Hacker']

function HackerController (Hacker) {
  'use strict'
  var vm = this
  vm.tagline = 'Nothing beats a pocket protector!'
  vm.formData = {}
  vm.create = create

  Hacker.get()
    .success(function(data) {
      vm.hackers = data
      console.log(data)
    })
    .error(function(data) {
      console.log('Error: ' + data)
    })

  function create () {
    Hacker.create(vm.formData)
      .success(function (data) {
        vm.formData = null
        vm.hackers = data
        console.log(data)
      })
      .error(function (data) {
        console.log('Error: ' + data)
      })
  }
}
