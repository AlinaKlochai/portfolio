function Character(name, health, level) {
    this.name = name;
    this.health = health;
    this.level = level;
}

function introduce() {
    console.log("Hello, my name is " + this.name + " , I am at level " + this.level + " , and I have " + this.health + " health.");
}

Character.prototype.introduce = introduce;

//create Object warrior

function Warrior(name, health, level, weapon) {
    Character.call(this, name, health, level);      //for create new Object(warrior) call a function for create character 
    this.weapon = weapon;
}


//Inheriting character methods for the warrior
Warrior.prototype = Object.create(Character.prototype);
//Installing the right builder-constructor for the warrior
Warrior.prototype.constuctor = Warrior;

function attack() {
    console.log(this.name + " attacking with a " + this.weapon);
}

Warrior.prototype.attack = attack;

function Wizard(name, health, level, spell) {
    Character.call(this, name, health, level);
    this.spell = spell;
}


Wizard.prototype = Object.create(Character.prototype);
Wizard.prototype.constructor = Wizard;


function castSpell() {
    console.log(this.name + " utters the incantation for " + this.spell );
}

Wizard.prototype.castSpell = castSpell;

// create new Characters
const Warrior1 = new Warrior("Warrior", 130, 8, "the most powerful weapon");
const Wizard1 = new Wizard("Wizard", 100, 13, "the most powerful spell");


Warrior1.introduce();
Wizard1.introduce();


Warrior1.attack();
Wizard1.castSpell();