class Transport{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    displayMainInfo(){
        console.log(`This is ${this.constructor.name}: ${this.make}, model - ${this.model}, ${this.year} year.`);
    }
};
  
class Car extends Transport{
    constructor(make, model, year, numDoors, isConvertible){
        super(make, model, year);
        this.numDoors = numDoors;
        this.isConvertible = isConvertible;
    }
    displayMainInfo(){
        super.displayMainInfo();
        console.log(`doors - ${this.numDoors}, is convertible - ${this.isConvertible}`);
    }
    
};

const car1 = new Car("BMW", "4er Cabrio M", 2024, 2, true);
car1.displayMainInfo();

const car2 = new Car("Mercedes-AMG", "GT 63 4AMATIC+", 2023, 2, false);
car2.displayMainInfo();

console.log('---------------------------------------------------------------------------');

class Motorcycle extends Transport{
    constructor(make, model, year, numWheels, hasSideCar){
        super(make, model, year);
        this.numWheels = numWheels;
        this.hasSideCar = hasSideCar;
    }
    displayMainInfo(){
        super.displayMainInfo();
        console.log(`wheels - ${this.numWheels}, has side car - ${this.hasSideCar}`);
    }
    
};

const motorcycle1 = new Motorcycle('Yamaha', 'R1M', 2023, 2, false);
motorcycle1.displayMainInfo();

const motorcycle2 = new Motorcycle('Yamaaaha', 'R1M23', 2015, 4, true);
motorcycle2.displayMainInfo();