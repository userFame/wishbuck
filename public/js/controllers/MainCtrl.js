angular.module('MainCtrl', [])
  .controller('MainController', MainController)

function MainController () {
  'use strict'
  var vm = this
  vm.tagline = 'Hack the Planet!'
}
