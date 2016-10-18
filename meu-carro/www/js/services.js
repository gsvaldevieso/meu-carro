angular.module('starter.services', [])
.factory('Carros', function($http) {
  return {
    all: function(callback) {
      var baseUrlApi = "http://192.168.0.16:3000/";

      $http({
        method: 'GET',
        url: baseUrlApi + 'api/carros/'
      }).then(function successCallback(response) {
          callback(response.data);
      }, function errorCallback(response) {
          callback([]);
      });

    },
    save: function(request, callback){
      var baseUrlApi = "http://192.168.0.16:3000/";

      $http({
        method: 'POST',
        url: baseUrlApi + 'api/carros/',
        data: request,
      }).then(function successCallback(response) {
          callback(response.data);
      }, function errorCallback(response) {
          callback([]);
      });

    }
  };
});
