myApp.service('SearchService', function($http) {

  sv = this;

  sv.searchGet = function(searchFor) {
    console.log('I am here in search service!!!');
    var searchUrl = "http://api.giphy.com/v1/gifs/search?q=";
    //   // target search input
    searchUrl += searchFor;
    searchUrl += "&api_key=dc6zaTOxFJmzC";
    console.log(searchUrl);

    // get call to /giphys
    return $http({
      method: 'GET',
      url: searchUrl
    }).then(function(response) {
      console.log('back with:', response);
      //Will be available in SongService.getSongs, but not elsewhere
      sv.searchData = response.data.data;
    }); // end http

  }; // end searchFunction


  sv.randomGet = function() {
    // var searchURL = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&";
    // console.log(searchURL);
    // get call to /giphys
    return $http({
      method: 'GET',
      url: "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&"
    }).then(function(response) {
      console.log('back with:', response);
      //Will be available in SongService.getSongs, but not elsewhere
      sv.randomData = response.data.data;
    }); // end http
  };
  // this.hello = function() {
  //   console.log("Hello from Service");
  // };
  //
  // sv.searchGet = function() {
  //   var vm = this;
  //
  //   console.log('in search service!!!');
  //   var searchUrl = "http://api.giphy.com/v1/gifs/search?q=";
  //   //   // target search input
  //   searchUrl += vm.itemsearch;
  //   searchUrl += "&api_key=dc6zaTOxFJmzC";
  //   console.log(searchUrl);
  //
  //   // if input field is empty, don't search
  //   if (vm.itemsearch === '') {
  //     alert("Please enter a search.");
  //   } else {
  //     $http({
  //       method: 'GET',
  //       url: searchUrl
  //     }).then(function(response) {
  //       console.log('back with:', response);
  // vm.data = response.data.data;
  // console.log(vm.data);
  // vm.url = response.data[i].embed_url;
  //     }); // end http
  //   }
  // };

});
