/* global angular */
'use strict'

/**
 * @ngdoc overview
 * @name app [smartadminApp]
 * @description
 * # app [smartadminApp]
 *
 * Main module of the application.
 */

angular.module('app', [
    'ngSanitize',
    'ngAnimate',
    'restangular',
    'ui.router',
    'ui.bootstrap',

    // Smartadmin Angular Common Module
    'SmartAdmin',

    // App
    'app.layout',
    'app.ui',
    'app.home'
])
.config(function(RestangularProvider) {
    RestangularProvider.setBaseUrl(window.location.pathname.replace(/[^/]+?$/, ''))
})
.constant('APP_CONFIG', window.appConfig)

.run(function($rootScope
    , $state, $stateParams
    ) {
    $rootScope.$state = $state
    $rootScope.$stateParams = $stateParams
    // editableOptions.theme = 'bs3';
})

