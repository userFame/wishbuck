(function () {
    "use strict";
 
    angular.module(APPNAME)
        .controller('TabsController', TabsController);
 
    TabsController.$inject = ['$controller'];
 
    function TabsController(
        $controller) {
 
        var vm = this;

        $controller('BaseController', { vm: vm });        
 
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
 
        vm.selectedTab = vm.tabs[0];
 
        vm.tabClass = _tabClass;
        vm.setSelectedTab = _setSelectedTab;
 
        _initialize();
 
        function _initialize() {

            console.log("tabs controller init");

        }
 
        function _tabClass(tab) {
            if (vm.selectedTab == tab) {
                return "active";
            } else {
                return "";
            }
        }
 
        function _setSelectedTab(tab) {
            console.log("set selected tab", tab);
            vm.selectedTab = tab;
        }
    }
})();