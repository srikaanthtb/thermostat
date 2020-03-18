function Thermostat(){
  this.temperature = 20;
  this.min = 10;
  this.powerSaver = true;
}

Thermostat.prototype.up = function (change) {
  this.temperature += change;
  if (this.powerSaver === true && this.temperature > 25) {
    this.temperature = 25;
  }
  else if (this.powerSaver === false && this.temperature > 32) {
    this.temperature = 32;
  }
};
Thermostat.prototype.down = function (change) {
this.temperature -= change;
  if (this.temperature < this.min) {
    this.tempreture = this.min;
  }
};

Thermostat.prototype.powerSaverOff = function () {
  this.powerSaver = false;
};
