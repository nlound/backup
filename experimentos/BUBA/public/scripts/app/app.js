
angular
    .module('bu-app', ['ngRoute', 'ui.bootstrap']).run(function($rootScope){
        $rootScope.$on("$routeChangeSuccess", function(){
            window.scrollTo(0,0);
        });
    }).config(function($routeProvider) {

        $routeProvider
            .when('/index', {
                templateUrl: 'templates/index.html',
                controller: 'IndexCtrl'
            })
            .when('/resultado', {
                templateUrl: 'templates/resultado.html',
                controller: 'ResultadoCtrl'
            })
            .when('/participaste', {
                templateUrl: 'templates/participaste.html',
                controller: 'ParticipasteCtrl'
            })
            .when('/bases-y-condiciones', {
                templateUrl: 'templates/bases-y-condiciones.html',
                controller: 'CondicionesCtrl'
            })
            .otherwise({
                redirectTo: '/index'
            });

    }).filter('isTrue', function() {
        return function(va, valid) {
            var with_true = []
            var with_false = []
            if (valid === true) {
                for (var i = 0; i < 32; i++) {
                    if (va[i][0]["checked"] || va[i][1]["checked"] || va[i][2]["checked"]) {
                        with_true.push(va[i])
                    }
                }
                return with_true
            } else if (valid === false) {
                for (var f = 0; f < 32; f++) {
                    with_false.push(va[f])
                }
                return with_false
            } else {
                console.log("")
            }
        }
    }).directive('add', function() {
        return function(scope, element, attrs) {
            element.bind('click', function() {
                scope.$apply(attrs.add)
            })
        }
    }).service('log', function($http) {
        var save = []
        return {
            post: function(evt, msg) {
                $http.post('/enviar/log', {
                    "evento": evt,
                    "msg": msg
                }).success(function(data) {
                }).error(function(data) {
                    console.log(data);
                });
            }
        }
    }).filter('escape', function(){
        return window.escape;
    }).filter('fb', function(){
        return function(msg){
            return  '?s=100&p[title]=Juga al simulador BAmundial=&p[summary]='+msg+'&p[url]=http://votamundial.buenosaires.gob.ar/'
            }
    });