var myApp = angular.module('myApp', []);

myApp.controller('HttpController', function($http) {
  var vm = this;
  console.log('HttpController hit');

  vm.startUpFunction = function() {
    console.log('in startUpFunction!!!');
    var vm = this;
    var searchUrl = "http://api.giphy.com/v1/gifs/search?q=";


  };

  vm.searchGet = function() {
    var vm = this;

    console.log('in searchGet!!!');
    var searchUrl = "http://api.giphy.com/v1/gifs/search?q=";
    //   // target search input
    searchUrl += vm.itemsearch;
    searchUrl += "&api_key=dc6zaTOxFJmzC";
    console.log(searchUrl);

    // if input field is empty, don't search
    if (vm.itemsearch === '') {
      alert("Please enter a search.");
    } else {
      $http({
        method: 'GET',
        url: searchUrl
      }).then(function(response) {
        console.log('back with:', response);
        vm.data = response.data.data;
        console.log(vm.data);
        // vm.url = response.data[i].embed_url;
      }); // end http
    }
  };
});
