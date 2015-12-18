//SERVICES
weatherApp.service('cityService', function(){
    
    this.city = "Hyderabad, Telangana";
    
});

weatherApp.service('weatherService', ['$resource', function($resource) {
  
  this.GetWeatherAPI = function(city, days) {

   $resource("http://api.openweathermap.org/data/2.5/forecast/daily", {
        callback: "JSON_CALLBACK"},{ get: { method: "JSONP" }});

     return weatherAPI.get({ q: city, cnt: days, appid: '610c01e4f8687fc3e2470b7439f7e074' });
   };  
}]);