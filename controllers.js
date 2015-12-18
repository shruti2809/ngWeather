//CONTROLLERS
weatherApp.controller('homeController', ['$scope', '$location', 'cityService', function($scope, $location, cityService) {
    
    $scope.city = cityService.city;
    
    $scope.$watch('city', function(){
        
        cityService.city = $scope.city;
    });

    $scope.submit = function() {
        $location.path("/forecast");
    };
    
}]);

weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', function($scope, $resource, $routeParams, cityService, weatherService) {
    
     $scope.city = cityService.city;
    
     $scope.days = $routeParams.days || '2';
                                             
     $scope.weatherResult = weatherservice.GetWeather($scope.city, $scope.days);
                                             
     $scope.convertToFahrenheit = function(degK){
        return   Math.round((1.8 * (degK - 273)) + 32);
    };
    
     $scope.convertToDate = function(dt){
        return new Date(dt*1000);
    };
    
    console.log($scope.weatherResult);
    
}]);