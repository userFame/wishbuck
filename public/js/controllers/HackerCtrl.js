angular.module('sabio.hacker.controller', ['sabio.hacker.service'])
  .controller('hackerController', HackerController)

HackerController.$inject = ['hackerService', '$stateParams','$alertService']

function HackerController(hackerService, $stateParams, $alertService) { 
  'use strict'
  var vm = this
  vm.tagline = 'Hack The Planet!'
  vm.$alertService = $alertService;
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

      vm.$alertService.success(data.item.name + " has been inserted");
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
    var msg = "An error occured";

    if(data.errors && data.errors.errmsg)
      msg += ": " + data.errors.errmsg;

      vm.$alertService.error(msg, "Hacker error");

    console.log('Error:',data.errors);
  }

}
