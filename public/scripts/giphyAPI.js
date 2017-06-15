var myApp = angular.module('myApp', []);

myApp.controller('HttpController', function(SearchService) {

  var vm = this;

  vm.searchGiphy = function() {
    vm.giphyList = [];
    console.log('HttpController hit');

    SearchService.searchGet(vm.itemsearch).then(function() {
      console.log(SearchService.searchData);
      vm.data = SearchService.searchData;
      console.log(vm.data);
    });
    console.log('searchGiphy activated!!!');
    // SearchService.searchGiphy();
  };
  // temp start up function
  // vm.startUpFunction = SearchService.hello;



  vm.searchRandom = function() {
    vm.giphyList = [];
    console.log('searchRandom activated!!!');
    SearchService.randomGet().then(function() {
      vm.data = SearchService.randomData;
      vm.final = vm.data.image_url;
      console.log(vm.final);
    });


    // SearchService.searchGiphy();
  };
  //
  //   }; vm.searchGet = function() {
  //     var vm = this;
  //
  //     console.log('in searchGet!!!');
  //     var searchUrl = "http://api.giphy.com/v1/gifs/search?q=";
  //     //   // target search input
  //     searchUrl += vm.itemsearch;
  //     searchUrl += "&api_key=dc6zaTOxFJmzC";
  //     console.log(searchUrl);
  //
  //     // if input field is empty, don't search
  //     if (vm.itemsearch === '') {
  //       alert("Please enter a search.");
  //     } else {
  //       $http({
  //         method: 'GET',
  //         url: searchUrl
  //       }).then(function(response) {
  //         console.log('back with:', response);
  //         vm.data = response.data.data;
  //         console.log(vm.data);
  //         // vm.url = response.data[i].embed_url;
  //       }); // end http
  //   }
  // };

});
