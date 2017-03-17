
$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $.get('http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=e4f4eb126438f8cf7d9803f8ed0e18db&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp);
  });

  $('#temperature-up').click(function() {
    thermostat.up();
    updateTemperature();
  });

  $('#temperature-down').click(function() {
    thermostat.down();
    updateTemperature();
  });

  $('#temperature-reset').click(function() {
    thermostat.reset();
    updateTemperature();
  });

  $('#powersaving-on').click(function() {
    thermostat.powerSavingOn();
    $('#power-saving-status').text('on');
    updateTemperature();
  });

  $('#powersaving-off').click(function() {
    thermostat.powerSavingOff();
    $('#power-saving-status').text('off');
      updateTemperature();
  });

  $('#current-city').change(function() {
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=e4f4eb126438f8cf7d9803f8ed0e18db&units=metric', function(data) {
      $('#current-temperature').text(data.main.temp);
    });
  });

  function updateTemperature() {
  $('#temperature').text(thermostat.currentTemperature);
  $('#temperature').attr('class', thermostat.checkEnergyUsage());
}
});
