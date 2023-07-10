class Vehicle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    
    honk(){
        return "Beep";
    }
    
    toString(){
        return `This current vehicle is a ${this.year} ${this.make} ${this.model}.`;
    }
}

class Car extends Vehicle{
    constructor(numWheels){
        super(numWheels);
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle{
    constructor(numWheels){
        super(numWheels);
        this.numWheels = 2;
    }
    
    revEngine(){
        return "VROOM!!!";
    }
}

class Garage{
    constructor(capacity){
        this.vehicles = [];
        this.capacity = capacity;
    }
    
    add(car){
        if (!(car instanceof Vehicle)){
            return "Only vehicles allowed in here";
        }
        
        if (this.vehicles.length < this.capacity){
            this.vehicles.push(car);
        }else{
            return "Sorry, we're full.";
        }
    }
}