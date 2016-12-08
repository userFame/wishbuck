(function () {
    "use strict";

    angular.module(APPNAME)
        .controller('TabsController', TabsController);

    TabsController.$inject = ['$controller', '$routerStateService'];

    function TabsController(
        $controller
        , $routerStateService) {

        var vm = this;

        $controller('BaseController', { vm: vm });

        vm.$routerStateService = $routerStateService;

        vm.tabs = [
            { link: '/', label: 'Home' },
            { link: '/hackers', label: 'Hackers' },
            { link: '/ui-bootstrap', label: 'UIBootstrap' },
            { link: '/notifications', label: 'Notifications' },
            { link: '/system-events', label: 'Pub/Sub' },
            { link: '/file-upload', label: 'Uploads' },
            { link: '/animate', label: 'Animations' },
            { link: '/geo', label: 'Geocoding' },
        ];

        vm.selectedTab = null;

        vm.tabClass = _tabClass;
        vm.setSelectedTab = _setSelectedTab;

        //  use this to snoop the route and route params since we are not attached directly to the state controller here
        vm.$routerStateService.onStateChangeSuccess(_onStateChangeSuccess);

        //  there is no need to hoist this function since it is never to be called from outside this controller
        function _onStateChangeSuccess(event, toState, toParams, fromState, fromParams) {

            console.log("tabs state change success", arguments)

            for (var i = 0; i < vm.tabs.length; i++) {

                if (vm.tabs[i].link == toState.url) {
                    _setSelectedTab(vm.tabs[i]);
                    break;
                }
            }

            if(!vm.selectedTab){
                vm.selectedTab = vm.tabs[0];
            }
        }

        function _tabClass(tab) {
            if (vm.selectedTab == tab) {
                return "active";
            } else {
                return "";
            }
        }

        function _setSelectedTab(tab) {
            vm.selectedTab = tab;
        }
    }
})();