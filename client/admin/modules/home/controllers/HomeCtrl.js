/* global angular */
'use strict'

angular.module('app.home')
.controller('HomeController', HomeController)

HomeController.$inject = ['HomeService']

function HomeController(HomeService) {
    var vm = this
    vm.tagline = 'Hello from Angular'

    HomeService.ping(onPingSuccess, onError)

    function onPingSuccess(data) {
        console.log(data)
    }
    function onError(err) {
        console.log(err)
    }
}
