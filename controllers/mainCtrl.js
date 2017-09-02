angular.module('mainCtrl', [])

.controller('mainController', function($scope, $http, VendingFactory,$routeParams) { 

    $scope.base_url = "http://localhost/local/tenten/vendingmachine";  
    
    // get all records
    VendingFactory.get_all().then(function successCallback(response){
        $scope.vending_machines = response.data.data;     

        if(response.data.data.length == 0){
          $scope.success_notification = true;
          $scope.error_notification = false;
          $scope.successMessage = "No Records found!";
        }  
    },
    function errorCallback(response){

      $scope.error_notification = true;
      $scope.success_notification = false;
      $scope.errorMessage = "Unable to load data: "+response.data.error;
    });


    // create vending machine
    $scope.submitVending = function(){

      VendingFactory.create($scope.vendingData).then(function successCallback(response){

          // when added
          $scope.vendingData.latitude = "";
          $scope.vendingData.longitude = "";

          $scope.create_success_notification = true;
          $scope.create_error_notification = false;
          $scope.successMessage = "Record created!";

          setTimeout(function(){
            $(".success-notification").fadeOut();
          },2000);

      },
      function errorCallback(response){ 

        $scope.create_error_notification = true;
        $scope.create_success_notification = false;
        $scope.errorMessage = "Unable to create record: "+response.data.error;

      });

    }

    // delete vending machine
    $scope.deleteVending = function(id){

      var c = confirm('Are you sure you want to delete this record?');

      if(c == true){
        VendingFactory.delete(id).then(function successCallback(response){

            $("."+id).fadeOut(); 

            $scope.success_notification = true;
            $scope.error_notification = false;
            $scope.successMessage = "Record successfully deleted!";   

            setTimeout(function(){
            $(".success-notification").fadeOut();
          },2000);

        },
        function errorCallback(response){ 
          $scope.error_notification = true;
          $scope.success_notification = false;
          $scope.errorMessage = "Unable to delete: "+response.data.error;
        });
      }else{
        alert('You cancelled the operation!');
      }
      

    }

    // get vending machine
    VendingFactory.get($routeParams.vending_machine_id).then(function successCallback(response){        
         $scope.vm = response.data.data;
         $scope.view_error_notification = false;
      },
      function errorCallback(response){  
        $scope.view_error_notification = true;
        $scope.errorMessage = "Unable to load data: "+response.data.error;
    });
    

});