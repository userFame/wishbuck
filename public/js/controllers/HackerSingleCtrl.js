angular.module('HackerSingleCtrl', [])
    .controller('HackerSingleController', HackerSingleController)

HackerSingleController.$inject = ['Hacker', '$stateParams']

function HackerSingleController(Hacker, $stateParams) {
    'use strict'
    var vm = this
    Hacker.get($stateParams.name)
        .success((data) => {
            vm.hacker = data
            console.log(data)
        })
        .error((data) => {
            console.log('Error: ' + data)
        })
}
