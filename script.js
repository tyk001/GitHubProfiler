(function() {
  'use strict';

  angular
    .module('myApp', [])
    .controller('myController', myController);

  myController.$inject = ['$http'];

  /* @ngInject */
  function myController($http) {
    var vm = this;
    var user = '';
    var data = [];
    //var userName = '';

    activate();

    function activate() {
      vm.getUserInfo = function() {
        $http.get("http://api.github.com/users/" + vm.userName + "?access_token=e19071b08c74bb142656ea00f612bfaa31ca2df1")
          .success(function(data) {
            vm.user = data;
            console.log(vm.user);
            console.log(userName);
          })
          .error(function() {
            alert("That user doesn't exist! So sorry. Come correct next time.");
          })
      }
    }
  }
})();
