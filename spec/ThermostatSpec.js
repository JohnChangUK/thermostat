describe("Thermostat", function(){
  var thermostat = new Thermostat();

  it('starts at 20 degrees', function(){
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('has a minimum temperature of 10', function(){
    expect(thermostat.minimumTemperature).toEqual(10);
  });

  it('is on power saving mode as default setting', function(){
    expect(thermostat.powerSavingMode).toBe(true);
  });

  it('power saving is on by default', function(){
    expect(thermostat.maximumTemperature).toEqual(25);
  });

  it('has a max temperature of 32 when power saving off', function(){
    thermostat.powerSavingOff();
    expect(thermostat.maximumTemperature).toEqual(32);
  });

  describe("Using the thermostat", function() {
    beforeEach(function() {
      thermostat = new Thermostat()
    });

    describe("Up", function() {
      it("increments the current temperature by 1", function() {
        thermostat.up();
        expect(thermostat.getCurrentTemperature()).toEqual(21);
      });

      it("cannot be increased above the maximum temperature", function(){
        for (i=1; i < 7; i++ ) {
          thermostat.up();
        };
        expect(thermostat.getCurrentTemperature()).toEqual(25);
      });

      it("cannot be increased above the maximum temperature", function(){
        thermostat.powerSavingOff()
        for (i=1; i < 14; i++ ) {
          thermostat.up();
        };
        expect(thermostat.getCurrentTemperature()).toEqual(32);
      });


    });

    describe("Down", function() {
      it("decreases the current temperature by 1", function() {
        thermostat.down();
        expect(thermostat.getCurrentTemperature()).toEqual(19);
      });

      it("cannot be decreased below the minimum temperature", function() {
        for (i = 1; i < 12; i++) {
          thermostat.down();
        };
        expect(thermostat.getCurrentTemperature()).toEqual(10);
      })
    });

    describe("Reset", function() {
         it("resets the temperature to 20", function() {
           thermostat.up();
           thermostat.reset();
           expect(thermostat.getCurrentTemperature()).toBe(20);
         });
       });

   describe("Mode", function() {

     it('has a max temperature of 32 when power saving off', function(){
       thermostat.powerSavingOff();
       expect(thermostat.maximumTemperature).toEqual(32);
     });

     it('has a max temperature of 25 when power saving is turned on', function(){
       thermostat.powerSavingOff();
       thermostat.powerSavingOn();
       expect(thermostat.maximumTemperature).toEqual(25);
     });
   });

    describe("check energy usage", function(){
      it("shows low energy usage", function(){
        for(i=1; i < 4; i++){thermostat.down()};
        expect(thermostat.checkEnergyUsage()).toEqual("low")
      });

      it("shows medium energy usage", function(){
        expect(thermostat.checkEnergyUsage()).toEqual("medium")
      });

      it("shows high energy usage", function(){
        for(i = 1; i < 6; i++) {
          thermostat.up();
        };
        expect(thermostat.checkEnergyUsage()).toEqual("high")
      });

    });

  });
});
