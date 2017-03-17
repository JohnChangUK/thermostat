'use strict';

function Thermostat(){
  this.minimumTemperature = MINIMUM_TEMPERATURE;
  this.currentTemperature = 20;
  this.powerSavingMode = true;
  this.maximumTemperature = this._determineMaxTemperature();
};

const MINIMUM_TEMPERATURE = 10;

Thermostat.prototype.getCurrentTemperature = function () {
  return this.currentTemperature;
};

Thermostat.prototype.up = function() {
  if (this.currentTemperature === this.maximumTemperature) {
    return;
  };
  this.currentTemperature ++;
};

Thermostat.prototype.down = function() {
  if (this.currentTemperature === this.minimumTemperature) {
    return;
  };
  this.currentTemperature --;
};

Thermostat.prototype.reset = function() {
  this.currentTemperature = 20;
};

Thermostat.prototype.powerSavingOff = function() {
  this.powerSavingMode = false;
  this._determineMaxTemperature();
};

Thermostat.prototype.powerSavingOn = function() {
  this.powerSavingMode = true;
  this._determineMaxTemperature();
};

Thermostat.prototype._determineMaxTemperature = function() {
  if (this.powerSavingMode === true){
    return this.maximumTemperature = 25;
  } else {
    return this.maximumTemperature = 32;
  };
};

Thermostat.prototype.checkEnergyUsage = function() {
  if (this.currentTemperature < 18 ){
    return  "low";
  } else if (this.currentTemperature < 25) {
    return "medium";
  } else {
    return "high";
  };
};
