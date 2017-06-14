var myApp = angular.module('myApp', []);

myApp.controller('HttpController', function() {
  var vm = this;
  console.log('HttpController hit');

  vm.startUpFunction = function() {
    console.log('I am here in startUpFunction!!!');
  };

});
