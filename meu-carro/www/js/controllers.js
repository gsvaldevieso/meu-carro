angular.module('starter.controllers', ['ionic'])

.controller('DashCtrl', function($scope, Carros, $ionicLoading) {
  $scope.listaCarros = [];
  
  $ionicLoading.show({
    template: 'Carrengando veículos..'
  }).then(function(){
     console.log("The loading indicator is now displayed");
  });

  Carros.all(function(carros){
    $scope.listaCarros = carros;

    $ionicLoading.hide().then(function(){
       console.log("The loading indicator is now hidden");
    });
  });

})

.controller('ChatsCtrl', function($scope, Carros) {
  $scope.cadastrarVeiculo = function() {
    var novoCarro =
    {
      "placa": this.placa,
      "modelo": this.carro,
      "dono": this.dono,
      "imagem": "img/ionic.png"
    };

    console.log(novoCarro);

    $ionicLoading.show({
      template: 'Salvando novo veículo...'
    }).then(function(){
       console.log("The loading indicator is now displayed");
    });

    Carros.save(novoCarro, function(){
      console.log("Carro salvo com sucesso!");
      $ionicLoading.hide().then(function(){
         console.log("The loading indicator is now hidden");
      });      
    });
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams) {
  
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
