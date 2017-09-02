angular.module('vendingService',[])

.factory('VendingFactory',function($http){

	var host = "http://frontend-test-api.herokuapp.com";

	var version = "/api/v1";

	var user_id = '30428b27-5b8c-4b1f-9ecb-8c67a285fc5c';

	return {
	     
	     get_all : function(){

	     	return $http.get(host+version+"/users/"+user_id+"/vending_machines");

	     },

	     get : function(id){

	     	return $http.get(host+version+"/users/"+user_id+"/vending_machines/"+id);

	     },

	     create : function(vendingData){

	     	if(typeof(vendingData) !== "undefined"){
	     		var longitude = vendingData.longitude == null ? null : vendingData.longitude;
	     		var latitude = vendingData.latitude == null ? null : vendingData.latitude;
	     	}else{
	     		var longitude = null;
	     		var latitude = null;	     		
	     	}	     	

	     	return $http({
		                method: 'POST',
		                url: host+version+"/users/"+user_id+"/vending_machines",
		                headers: { 'Content-Type': 'application/json; charset=utf-8'},
		                data: {
		                		"user_id" : user_id,
		                		"vending_machine" : {
			                			"longitude" : longitude,
			                			"latitude" : latitude
			                		}
	                		}
	                });
	     },

	     delete : function(id){	     

	     	return $http.delete(host+version+"/users/"+user_id+"/vending_machines/"+id);

	     }

	};

});