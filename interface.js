$(document).ready(function(){
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.temperature);

  $('#up').on('click', function(){
    thermostat.up(1);
    $('#temperature').text(thermostat.temperature);
  });

  $('#down').on('click', function(){
    thermostat.down(1);
    $('#temperature').text(thermostat.temperature);
  });

  $('#reset').on('click', function(){
    thermostat.reset();
    $('#temperature').text(thermostat.temperature);
  });

  $('#saveron').on('click', function(){
    thermostat.powerSaverOn();
    $('#powerSaverStatus').text('on');
    $('#temperature').text(thermostat.temperature);
  });
  $('#saveroff').on('click', function(){
    thermostat.powerSaverOff();
    $('#powerSaverStatus').text('off');
    $('#temperature').text(thermostat.temperature);
  });
});