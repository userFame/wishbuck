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

            // vm.setUpCurrentRequest(vm);
 
            // switch (vm.currentRequest.originalPath) {
            //     case "/":
            //         vm.heading = "Main Controller";
            //         vm.message = "hello! welcome to the routes demo. I am the main controller and this is the main page.";
            //         break;
 
            //     case "/about":
            //         vm.heading = "About Us";
            //         vm.message = "This text is coming from the main controller also but it's changing because of the new route. It's the same controller but it loads a different template into ng-view.";
            //         break;
 
            //     case "/query":
            //         vm.heading = "Querystring parameters are key/value pairs.";
            //         vm.message = "They are passed in the URL of the page on GET requests. Notice how Angular captures all of these params in a variable which you can access as $route.current.params.";
            //         break;
            // }
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