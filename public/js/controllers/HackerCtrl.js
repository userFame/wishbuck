angular.module('HackerCtrl', [])
  .controller('HackerController', HackerController)

HackerController.$inject = ['Hacker']

function HackerController(Hacker) {
  'use strict'
  var vm = this
  vm.tagline = 'Hack The Planet!'
  vm.formData = {}
  vm.save = saveHacker
  vm.get = getHacker
  vm.remove = removeHacker

  Hacker.getAll()
    .success((data) => {
      vm.hackers = data
      console.log(data)
    })
    .error((data) => {
      console.log(`Error: ${data}`)
    })

  function getHacker(name) {
    Hacker.get(name)
      .success((data) => {
        vm.hacker = data
        console.log(data)
      })
      .error((data) => {
        console.log(`Error: ${data}`)
      })
  }

  function saveHacker() {
    Hacker.post(vm.formData)
      .success((data) => {
        vm.formData = null
        console.log(data)
        if (data)
          vm.hackers.push(data)
      })
      .error((data) => {
        console.log(data)
      })
  }

  function removeHacker(name) {
    Hacker.delete(name)
      .success((data) => {
        vm.formData = null
        let removeIndex = vm.hackers.findIndex((element, index, hackers) => {
          return element.name === data.name
        })
        vm.hackers.splice(removeIndex, 1)
        console.log(data)
      })
      .error((data) => {
        console.log('Error: ' + data)
      })
  }
}
