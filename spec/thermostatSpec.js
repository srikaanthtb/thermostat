'use strict';

describe ('Thermostat', function(){
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });
 it ('starts thermostat at 20 degrees', function(){
   expect(thermostat.temperature).toEqual(20);
 });
 it ('changes the temp by 10', function(){
    thermostat.up(3);
    expect(thermostat.temperature).toEqual(23);
 });
 it ('changes the temp by 10', function(){
    thermostat.down(10);
    expect(thermostat.temperature).toEqual(10);
 });
 it ('does not lower the tempreture by the minimum', function(){
   thermostat.down(20);
   expect(thermostat.tempreture).toEqual(10);
 });

 it ('checks if power saver is on by default', function(){
   expect(thermostat.powerSaver).toEqual(true);
 });

 it ('does not allow temp to go over 25 if power saver is on', function(){
   thermostat.up(30);
   expect(thermostat.temperature).toEqual(25);
 });
 it ('does not allow temp to go over 32 if power saver is off', function(){
   thermostat.powerSaverOff();
   thermostat.up(30);
   expect(thermostat.temperature).toEqual(32);
 });

});
