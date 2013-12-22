var app= angular.module('noteStack',['ngRoute']);

window.routes ={
	"/":{
		templateUrl:'app/partials/home.html',
		controller:'homeController'		
		}
	
};

app.config(['$routeProvider',function($routeProvider) {
	for(var path in window.routes) {
		$routeProvider.when(path, window.routes[path]);
	}

}]);