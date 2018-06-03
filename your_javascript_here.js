// Variables
/*
Declare the global variable hero and assign it an object. This object has the following keys and values:

1. `name` which is a string (you choose the name)
2. `heroic` which is a boolean
3. `inventory` which is an array
4. `health` which is a number
5. `weapon` which is an object (it has some stats in the form keys and values)
6. `weapon` has a key `type` which is a string
7. `weapon` has a key `damage` which is a number
*/
let hero = new Object();

hero.name= "batman";
hero.heroic= true;
hero.inventory= [{type:"gun",damage:8}];
hero.health= 10;
hero.weapon= {type: 'knife', damage: 2};

let enemy = new Object();

enemy.name= "joker";
enemy.heroic= false;
enemy.inventory= [{type:"knife",damage:4}];
enemy.health= 5;
enemy.weapon= {type:"barehand",damage: 1};

// Game logic
/*
`rest` is a function that restores a creatures health to 10
    1. `rest` should have one parameter: `creature`. You can assume that creature has the same structure as your `hero` object
    2. modify the `health` of the `creature` object by assigning it `10`
    3. return the `creature`object from the function
*/
let rest = function(creature) {
  creature.health=10;
  return creature;
}
/*
`pickUpItem` is a function that adds an item to the inventory of a creature
    1. `pickUpItem` should have two parameters: `creature` and `item`. You can assume that creature has the same structure as your `hero` object and that `item` has the same structure as a `weapon` object.
    2. modify the `inventory` of the `creature` by adding the item to it.
    3. return the `creature` object from the function
*/
function pickUpItem(creature, type, damage) { //i changed "item" to "type" and added "damage" deliberately, so that
  creature.inventory.push({type, damage});    //it stays consistent with the properties of the "hero" object
  return creature;
}

/*
`dealDamage` is a function that subtracts one creatures weapon damage from another creatures health
    1. `dealDamage` should have two parameters: `attacker` and `defender`. You can assume that both have the same structure as your `hero` object.
    2. modify the `health` value of the `defender` object by subtracting the value of the attacker's weapon damage.
    3. return the `defender` object from this function.
*/
function dealDamage(attacker,defender) {
  defender.health=defender.health-attacker.weapon.damage;
  return defender;
}
/*
`equipWeapon` is a function that takes a changes the weapon of the creature to one that is in their inventory and removes that weapon from their inventory.
    1. `equipWeapon` should have two parameters. `creature` and `index`. You can assume that creature has the same structure as your `hero` object and that `index` is a number.
    2. modify the `weapon` of the `creature` by assigning it the value of the `index`th element of the `inventory`
    3. modify the creature's `inventory` by removing the `index`th element from it
    4. return the `creature` object from the function
*/

function equipWeapon(creature,index) {
    creature.weapon=creature.inventory[index];
    creature.inventory.splice(index,1);
    return creature;
}
/*
`doBattle` is a function that takes two creatures, the first of which is a hero, which deal damage to each other until one of them dies.
    1. `doBattle` should have two parameters `heroicCreature` and `creature`. You can assume that both have the same structure as your `hero` object.
    2. make a guard clause which checks if `heroicCreature` is `heroic`. If `heroicCreature` is not `heroic` return `null` from this function.
    3. while `heroicCreature` and `creature` have health above zero they take turns dealingDamage to eachother: `heroicCreature` deals damage to `creature` first. If `creature` survives it deals damage to `heroicCreature`.
    4. at the end of `doBattle` check if `heroicCreature` has health above zero; if so return it from the function. Otherwise give the user feedback about the death of their hero with a popup.
*/

//this function works properly but still throws an error!
function doBattle(heroicCreature, creature) {
  if (heroicCreature.heroic!=true) {
    return null; } else {
      while (heroicCreature.health>0 && creature.health>0) {
        dealDamage(heroicCreature,creature);
        if (creature.health>0) {dealDamage(creature,heroicCreature);}
      };
      if (heroicCreature.health>0) {
        return heroicCreature.health; } else {
          window.alert("your hero has died!")};
        };
}

// UI
/*
Write `displayStats` function that writes your hero's name, health, weapontype, weapon damage to the page. Call it at the end of your script
*/

function displayStats() {
  document.getElementsByTagName("td")[0].innerHTML = hero.name;
  document.getElementsByTagName("td")[1].innerHTML = hero.health;
  document.getElementsByTagName("td")[2].innerHTML = hero.weapon.type;
  document.getElementsByTagName("td")[3].innerHTML = hero.weapon.damage;
}

/*
Write a `displayInventory` function that iterates over your hero's inventory and writes it to the page. Add a couple of weapons to you hero's inventory to see if it works. Call it at the end of your script
*/

//this throws an "Uncaught Typeerror", but it actually works!
function displayInventory() {
  let invType = [];
  for (i=0; i<=hero.inventory.length; i++) {
  invType = invType+" "+hero.inventory[i].type;
  document.getElementsByTagName("td")[4].innerHTML = invType;
  }
}

/*
Write an `updateStats` function that calls `displayStats` and `displayInventory`. Call `updateStats` when a picture is clicked in addition to the function that is already being called.
*/

function updateStats() {
  displayStats();
  displayInventory();
}

/*
Create a form that allow users to change the name of their hero.
*/
function submitHero() {
  hero.name = document.getElementById("newHero").value;
}

/*
When an enemy or weapon gets clicked it gets deleted from the DOM
*/
//couldn't manage to make it work 
function removeStuff() {
    var image =  document.getElementById("container");
    image.removeChild(image.childNodes[1]);
}
