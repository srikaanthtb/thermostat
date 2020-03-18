function Thermostat(){
  this.temperature = 20;
  this.min = 10;
  this.powerSaver = true;
  this.usage = 'medium-usage';
}

Thermostat.prototype.up = function (change) {
  this.temperature += change;
    this.isUsage();
  if (this.powerSaver === true && this.temperature > 25) {
    this.temperature = 25;
    this.isUsage();
  }
  else if (this.powerSaver === false && this.temperature > 32) {
    this.temperature = 32;
      this.isUsage();
  }
};
Thermostat.prototype.down = function (change) {
this.temperature -= change;
  this.isUsage();
  if (this.temperature < this.min) {
    this.temperature = this.min;
      this.isUsage();
  }
};

Thermostat.prototype.powerSaverOff = function () {
  this.powerSaver = false;
};
Thermostat.prototype.powerSaverOn = function () {
  this.powerSaver = true;
  if(this.temperature > 24){
    this.temperature = 24;
  }
};

Thermostat.prototype.reset = function() {
  this.temperature = 20;
};

Thermostat.prototype.isUsage = function() {
  if(this.temperature < 18){
    this.usage = 'low-usage';
  }else if(this.temperature > 24){
    this.usage = 'high-usage';
  }
};
