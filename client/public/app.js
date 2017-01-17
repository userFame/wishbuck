/* global angular */
'use strict'

/**
 * @ngdoc overview
 * @name sabioapp
 * @description
 * # sabioapp
 *
 * Main public module of the application.
 */

angular.module('sabioapp', [
    'ui.router',
    'ui.bootstrap',

        // App
    'sabioapp.home'
])
    .run(function($rootScope, $state, $stateParams) {
        $rootScope.$state = $state
        $rootScope.$stateParams = $stateParams
        // editableOptions.theme = 'bs3';
    })
