// constructor function
function Vehicle(brand, model, speed, fuelType) {
    this.brand = brand;
    this.model = model;
    this.speed = speed || 0;
    this.fuelType = fuelType;
  }
  
  // Adding common methods to the Vehicle prototype
  Vehicle.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.brand} ${this.model} is accelerating. Current speed: ${this.speed} mph`);
  };
  
  Vehicle.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.brand} ${this.model} is braking. Current speed: ${this.speed} mph`);
  };
  
  Vehicle.prototype.refuel = function () {
    console.log(`${this.brand} ${this.model} is refueling.`);
  };
  
  // Car constructor function inheriting from Vehicle
  function Car(brand, model, speed, fuelType, numberOfWheels) {
    Vehicle.call(this, brand, model, speed, fuelType);
    this.numberOfWheels = numberOfWheels;
  }
  
  // Inheriting methods from Vehicle prototype
  Car.prototype = Object.create(Vehicle.prototype);
  
  // Adding an additional method for Car
  Car.prototype.honk = function () {
    console.log(`${this.brand} ${this.model} is honking. Honk honk!`);
  };
  
  // Airplane constructor function inheriting from Vehicle
  function Airplane(brand, model, speed, fuelType, numberOfEngines, hasLandingGear) {
    Vehicle.call(this, brand, model, speed, fuelType);
    this.numberOfEngines = numberOfEngines;
    this.hasLandingGear = hasLandingGear;
  }
  
  // Inheriting methods from Vehicle prototype
  Airplane.prototype = Object.create(Vehicle.prototype);
  
  // Adding an additional method for Airplane
  Airplane.prototype.takeOff = function () {
    console.log(`${this.brand} ${this.model} is taking off. Clear for takeoff!`);
  };
  
  // Creating instances 
  const myCar = new Car("Toyota", "Camry", 30, "Gasoline", 4);
  const myAirplane = new Airplane("Boeing", "747", 500, "Jet Fuel", 4, true);
  
  myCar.accelerate();
  myCar.brake();
  myCar.refuel();
  myCar.honk();
  
  myAirplane.accelerate();
  myAirplane.brake();
  myAirplane.refuel();
  myAirplane.takeOff();
  