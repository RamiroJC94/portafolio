var app = angular.module('miApp',['ngRoute'])

app.controller('CtrlConocimientos',function($scope){
	$scope.conocimientos = {
		"front":[
			{
				"nombre":"JavaScript",
				"nivel":"Avanzado",
				"progressb":"70"
			},
			{
				"nombre":"HTML5",
				"nivel":"Avanzado",
				"progressb":"70"
			},
			{
				"nombre":"CSS3",
				"nivel":"Avanzado",
				"progressb":"70"
			},
			{
				"nombre":"Bootstrap",
				"nivel":"Intermedio",
				"progressb":"50"
			},
			{
				"nombre":"jQuery",
				"nivel":"Intermedio",
				"progressb":"50"
			},
			{
				"nombre":"AngularJS",
				"nivel":"Intermedio",
				"progressb":"50"
			}
		],
		"back":[
			{
				"nombre":"Node.js",
				"nivel":"Intermedio",
				"progressb":"50"
			},
			{
				"nombre":"Express",
				"nivel":"Intermedio",
				"progressb":"50"
			}
		],
		"bd":[
			{
				"nombre":"MongoDB",
				"nivel":"Intermedio",
				"progressb":"50"
			},
			{
				"nombre":"MySQL",
				"nivel":"Intermedio",
				"progressb":"50"
			}
		],
		"versionadores":[
			{
				"nombre":"Git",
				"nivel":"Intermedio",
				"progressb":"50"
			}
		],
		"SO":[
			{
				"nombre":"Manjaro",
				"nivel":"Intermedio",
				"progressb":"50"
			}
		],
		"interpretado":[
			{
				"nombre":"Python",
				"nivel":"Básico",
				"progressb":"30"
			}
		],
		"POO":[
			{
				"nombre":"Java",
				"nivel":"Básico",
				"progressb":"30"
			}
		]
	}
})
