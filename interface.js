$(document).ready(function(){
  var thermostat = new Thermostat();
  updateTemperature();

  $('#up').on('click', function(){
    thermostat.up(1);
    updateTemperature();
  });

  $('#down').on('click', function(){
    thermostat.down(1);
    updateTemperature();
  });

  $('#reset').on('click', function(){
    thermostat.reset();
    updateTemperature();
  });

  $('#saveron').on('click', function(){
    thermostat.powerSaverOn();
    $('#powerSaverStatus').text('on');
    updateTemperature();
  });
  $('#saveroff').on('click', function(){
    thermostat.powerSaverOff();
    $('#powerSaverStatus').text('off');
    updateTemperature();
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.usage);
  };
  function displayWeather(city) {
 var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
 var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
 var units = '&units=metric';
 $.get(url + token + units, function(data) {
   $('#current-temperature').text(data.main.temp);
 });

 displayWeather('London');

 $('#select-city').submit(function(event) {
   event.preventDefault();
   var city = $('#current-city').val();
   displayWeather(city);
 });
});
