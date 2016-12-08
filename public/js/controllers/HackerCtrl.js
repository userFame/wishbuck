angular.module('sabio.hacker.controller', ['sabio.hacker.service'])
  .controller('hackerController', HackerController)

HackerController.$inject = ['hackerService', '$stateParams']

function HackerController(hackerService, $stateParams) {
  'use strict'
  var vm = this
  vm.tagline = 'Hack The Planet!'
  vm.formData = {}
  vm.hackers = []

  if ($stateParams.id) {
    hackerService.get($stateParams.id, onGetSuccess)
  }
  else {
    hackerService.getAll(getAllSuccess, onError)
  }

  vm.insert = () => {
    hackerService.post(vm.formData, onInsertSuccess, onError)
  }
  vm.update = () => {
    hackerService.put(vm.formData, onUpdateSuccess, onError)
  }
  vm.get = (id) => {
    hackerService.get(id, onGetSuccess, onError)
  }
  vm.remove = (id) => {
    hackerService.delete(id, onDeleteSuccess, onError)
  }


  function onInsertSuccess(data) {
    vm.formData = null
    if (data.item)
      vm.hackers.push(data.item)
  }

  function getAllSuccess(data) {
    vm.hackers = data.items
  }

  function onGetSuccess(data) {
    vm.hacker = data.item
  }

  function onUpdateSuccess(data) {
    vm.formData = null
    if (data)
      vm.hackers.push(data)
  }

  function onDeleteSuccess(data) {
    vm.formData = null
    let removeIndex = vm.hackers.findIndex((element, index, hackers) => {
      return element._id === data._id
    })
    vm.hackers.splice(removeIndex, 1)
  }

  function onError(data) {
    console.log(`Error: ${data.errors}`)
  }

}
