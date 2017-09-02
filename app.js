var vendingApp = angular.module('vendingApp', ['mainCtrl','vendingService','ngRoute']);

vendingApp.config(['$routeProvider', function ($routeProvider) {
 $routeProvider.
      when('/create', {
        templateUrl: 'local/tenten/vendingmachine/partials/create_form.html', 
        controller: 'mainController'
      }).
      when('/:vending_machine_id', {
        templateUrl: 'local/tenten/vendingmachine/partials/search_single.html',
        controller: 'mainController'
      }).
      when('/', {
        templateUrl: 'local/tenten/vendingmachine/partials/dashboard.html',
        controller: 'mainController'
      }).otherwise({
	    redirectTo: '/'
	  });

}]);
