   angular.module('iServifast')
    .controller('serviciodetailCtrl', function($scope, servicioService,$routeParams, $http){
        $scope.servicio =[];
        $scope.form = {
                    nota:""
                }
        function getServicioDetail(){
            servicioService.getServicioDetail($routeParams.servicioId)
            .success(function(data){
                $scope.servicio = data;
                console.log(data);
            })
            .error(function(error){
                $scope.status = 'Error al consultar por servicios';
            });
        }
        getServicioDetail();
        $scope.addVoto = function (){
            servicioService.addVoto($routeParams.servicioId,$scope.form.nota)
            .success(function(data){
                $scope.voto = data;
                console.log(data);
            })
            .error(function(error){
                $scope.status = 'Error al consultar por servicios';
            });

        }
    });
