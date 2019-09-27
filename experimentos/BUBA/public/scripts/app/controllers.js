function IndexCtrl($scope, $http, $route, $routeParams, $location, log) {

    $scope.log = function(lugar, msg) {
        log.post(lugar, msg);
    }

    $scope.$on('$viewContentLoaded', createClientInteractions);

    var shuffleArray = function(array) {
        var m = array.length,
            t, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }
        return array;
    }

    $http.get('/equipos')
        .success(function(data, status, headers, config) {
            $scope.range = shuffleArray(data);
        }).error(function(data) {
            console.log(data)
        })


    $scope.uncheck = function(info) {

        if (info[4].checked == true) {
            info[4].checked = false
        }


    }

    $scope.checkAll = function(info) {
        if (info[0].checked == true && info[1].checked == true && info[2].checked == true && info[4].checked == true) {
            for (var i = 0; i < info.length; i++) {
                info[i].checked = false
            }
        } else {
            for (var i = 0; i < info.length; i++) {
                info[i].checked = true
            }
        }
    }

    $scope.count = 0

    $scope.enviar = function() {
        
        $scope.count += 1

        if ($scope.count == 2) {
            window.location.reload()
        }

        $http.post("/enviar", $scope.range)
            .success(function(data, status, headers, config) {
                $location.path("/resultado")
            }).error(function(data, status, headers, config) {
                console.log("tengo errores");
                console.log('data')
                console.log(data)
                console.log('status')
                console.log(status)
                console.log('headers')
                console.log(headers)
                console.log('config')
                console.log(config)
            });
    };

}

function ResultadoCtrl($scope, $rootScope, $http, $route, $routeParams, $location, $modal, log, $filter, isTrueFilter) {

    $scope.log = function(lugar, msg) {
        log.post(lugar, msg);
    }
    
    
    $scope.open = function() {

        $http.get('/vots')
            .success(function(data, status, headers, config) {
                len = data.length
                $scope.range = data.texto[0].array
                $scope.validacion = data.validacion
                $scope.msg = data.infor
                $scope.isCollapsed = data.validacion
                $scope.alerta = $filter("isTrue")(data.texto[0].array, data.validacion)
                if ($scope.alerta.length != 0){
                    if ($scope.alerta[0][4].checked == true){
                        var share = "Mi prediccion: #"+ $scope.alerta[0][6].flag + " campeon, goleador #" + $scope.alerta[0][6].flag + " y mejor jugador #" + $scope.alerta[0][6].flag +". Juga al simulador #BAmundial "
                        $scope.share = encodeURIComponent(share);
                    } else if ($scope.alerta[0][0].checked == true && $scope.alerta[0][1].checked == false && $scope.alerta[0][2].checked == true){
                        var share = "Mi prediccion: #"+ $scope.alerta[0][6].flag + " campeon y goleador #" + $scope.alerta[0][6].flag +". Juga al simulador #BAmundial "
                        $scope.share = encodeURIComponent(share);
                    } else if ($scope.alerta[0][0].checked == false && $scope.alerta[0][1].checked == true && $scope.alerta[0][2].checked == true){
                        var share = "Mi prediccion: goleador #" + $scope.alerta[0][6].flag + " y mejor jugador #" + $scope.alerta[0][6].flag +". Juga al simulador #BAmundial "
                        $scope.share = encodeURIComponent(share);
                    } else if ($scope.alerta[0][0].checked == true && $scope.alerta[0][1].checked == false && $scope.alerta[0][2].checked == false){
                        var share = "Mi prediccion: #"+ $scope.alerta[0][6].flag + ". Juga al simulador #BAmundial "
                        $scope.share = encodeURIComponent(share);
                    } else if ($scope.alerta[0][2].checked == true && $scope.alerta[0][0].checked == false && $scope.alerta[0][1].checked == false){
                        var share = "Mi prediccion: goleador #" + $scope.alerta[0][6].flag + ". Juga al simulador #BAmundial "
                        $scope.share = encodeURIComponent(share);
                    } else {
                        $scope.share = encodeURIComponent('Jugá al simulador #BAmundial');    
                    }
                } else {
                    $scope.share = encodeURIComponent('Jugá al simulador #BAmundial');
                }
                var modalInstance = $modal.open({
                    templateUrl: 'alerta.html',
                    controller: alertCtrl,
                    size: 'lg',
                    keyboard: 'false',
                    backdrop: 'static',
                    resolve: {
                        items: function() {
                            return [data.infor, data.validacion, data.texto[0].array, share]
                        }
                    }
                });

            }).error(function(data) {
                console.log(data)
            })

    };

    console.log("ejecutando controlado en resultado.html")

    $scope.user = {};

    $scope.count = 0

    Object.size = function(obj) {
        var size = 0,
            key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return size;
    };

    $scope.enviarForm = function(isValid, user) {

        $scope.requerido = 'Por favor completa todos los campos del formulario.';
        $scope.master = {};

        $scope.count += 1

        if ($scope.count == 4) {
            window.location.reload()
        }
        if (isValid) {

            $http.post("/participar", $scope.user)
                .success(function(data, status, headers, config) {
                    $location.path("/participaste")
                }).error(function(data, status, headers, config) {
                    console.log("tengo errores");
                    console.log('data')
                    console.log(data)
                    console.log('status')
                    console.log(status)
                    console.log('headers')
                    console.log(headers)
                    console.log('config')
                    console.log(config)
                });
        }

    }

    $scope.$back = function(validacion) {
        if (validacion != true) {
            $location.path('/index');
            //window.history.back()
        }
    };

}
var alertCtrl = function($scope, $modalInstance, log, items, $location) {

    $scope.log = function(lugar, msg) {
        log.post(lugar, msg);
    }


    $scope.alert = items[0];
    $scope.isCollapsed = items[1];
    $scope.resultadoArray = items[2];
    $scope.share = items[3];

    $scope.$back = function(validacion) {
        if (validacion != true) {
            $location.path('/index');
            $modalInstance.close();
        }
    };

    $scope.ok = function() {
        $modalInstance.dismiss();
    };

    $scope.mensaje = function() {

    }

};

function ParticipasteCtrl($scope, $http, $route, log, $routeParams, $location) {
    $scope.log = function(lugar, msg) {
        log.post(lugar, msg);
    }
    console.log("terminaste el concurso")
}

function CondicionesCtrl($scope, $http, $route, log, $routeParams, $location) {
    $scope.log = function(lugar, msg) {
        log.post(lugar, msg);
    }
    console.log("terminaste el concurso")
}