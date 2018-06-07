/// <reference path="angular.min.js" />



var app = angular.module("myModule", ["ngRoute"]);
        app.config(function ($routeProvider, $locationProvider) {
            $routeProvider
                .when("/london", {
                    templateUrl: "Templates/London.html",
                    controller: "londonController"
                })
                .when("/paris", {
                    templateUrl: "Templates/Paris.html",
                    controller: "parisController"
                })
                .when("/tokyo", {
                    templateUrl: "Templates/Tokyo.html",
                    controller: "tokyoController"
                })
                .otherwise({
                    redirectTo: "/london"
                });

            $locationProvider.html5Mode(true);
        })
        .controller("londonController", function($scope){
            //add in whatever controller specific code here
        })
        .controller("parisController", function ($scope) {
            //add in whatever controller specific code here
        })
        .controller("tokyoController", function ($scope) {
            //add in whatever controller specific code here
        });