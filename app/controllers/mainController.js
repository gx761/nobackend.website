angular.module('app')
  .controller('MainCtrl', function (githubService) {
    var vm = this;
    vm.message = 'hello';
    vm.showNav = true;
    console.info(vm.showNav);
    vm.toggleNav = function () {
      vm.showNav = !vm.showNav;
      console.info('vm.showNav', vm.showNav);
    };

    vm.showTOC = false;
    vm.toggleTOC = function () {
      vm.showTOC = !vm.showTOC;
      console.info('vm.showTOC', vm.showTOC);
    };

    githubService.getConfig().then(function (res) {
      vm.config = res.data;
    });
  });