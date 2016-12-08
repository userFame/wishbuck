angular.module('sabio.hacker.controller', ['sabio.hacker.service'])
  .controller('hackerController', HackerController)

HackerController.$inject = ['hackerService', '$stateParams', '$alertService']

function HackerController(hackerService, $stateParams, $alertService) {
  'use strict'
  var vm = this
  vm.tagline = 'Hack The Planet!'
  vm.$alertService = $alertService;
  vm.formData = {}
  vm.hackers = []

  vm.checkName = _checkName;
  vm.submitRow = _submitRow;
  vm.removeRow = _removeRow;
  vm.addRow = _addRow;

  _initialize();

  function _initialize() {
    if ($stateParams.id) {
      hackerService.get($stateParams.id, onGetSuccess)
    }
    else {
      hackerService.getAll(getAllSuccess, onError)
    }
  }

  //  this is just a silly example but it shows how you can validate data before it gets submitted.
  //   you could do an ajax call here to check if an email address is unique, for example.
  function _checkName(data, id) {
    if (!data)
      return "Hacker name is required";

    if (data.toLowerCase().indexOf("sabio") > -1)
      return "Thou shalt not take Sabio's name in vain!!";
  }

  function _addRow() {

    vm.formData = { name: null };

    vm.hackers.unshift(vm.formData);
  }

  function _submitRow(data, id) {
    if (id) {
      hackerService.put(data, onUpdateSuccess, onError)
    }
    else {
      hackerService.post(data, onInsertSuccess, onError)
    }
  }

  function _removeRow(id, index) {
    if (id) {
      if (confirm("Are you sure you want to delete this hacker?")) {
        hackerService.delete(id, onDeleteSuccess, onError)
      }
    }
    else {
      vm.hackers.splice(index, 1);
    }


  }

  vm.get = (id) => {
    hackerService.get(id, onGetSuccess, onError)
  }

  function onInsertSuccess(data) {
    vm.formData = null
    
    vm.$alertService.success(data.item.name + " has been inserted");

    _initialize();
  }

  function getAllSuccess(data) {
    vm.hackers = data.items
  }

  function onGetSuccess(data) {
    vm.hacker = data.item
  }

  function onUpdateSuccess(data) {
    vm.formData = null
    
    vm.$alertService.success("Hacker was updated");

    _initialize();
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

    if (data.errors && data.errors.errmsg)
      msg += ": " + data.errors.errmsg;

    vm.$alertService.error(msg, "Hacker error");

    console.log('Error:', data.errors);
  }

}
