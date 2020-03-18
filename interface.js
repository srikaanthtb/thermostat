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
});
