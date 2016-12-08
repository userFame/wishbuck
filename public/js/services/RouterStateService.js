/*
    accessing $rootScope directly in the controller is not very cool. use this service 
    as a middleman to encapsulate and control access to $rootScope in a sane and orderly manner.
*/
(function () {
    "use strict";

    angular.module(APPNAME)
        .factory('$routerStateService', ServiceFactory);

    ServiceFactory.$inject = ['baseService', '$rootScope'];

    function ServiceFactory(baseService, $rootScope) {
        
        const svc = Object.create(baseService);

        svc.$rootScope = $rootScope;

        svc.onStateChangeStart = _onStateChangeStart;
        svc.onStateChangeSuccess = _onStateChangeSuccess;
        svc.onStateChangeError = _onStateChangeError;        
        /*            
            callbacks should accept these args:

            function (event, toState, toParams, fromState, fromParams) {
                        console.log("on state change", arguments)
            }
        */
        function _onStateChangeStart(callback) {
            svc.$rootScope.$on("$stateChangeStart", callback);
        }        

        function _onStateChangeSuccess(callback) {
            svc.$rootScope.$on("$stateChangeSuccess", callback);
        }        

        function _onStateChangeError(callback) {
            svc.$rootScope.$on("$stateChangeError", callback);            
        }        

        return svc;
    }

})();