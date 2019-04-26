app.config(function($routeProvider, $locationProvider){
	$routeProvider
	.when('/', 				{ templateUrl: 'views/home.html'})
	.when('/inicio', 		{ templateUrl: 'views/home.html'})
	.when('/conocimientos', { templateUrl: 'views/conocimientos.html'})
	.when('/contacto', 		{ templateUrl: 'views/contacto.html'})
	.otherwise(				{ templateUrl: 'views/error.html'});

	$locationProvider.html5Mode(true);
});