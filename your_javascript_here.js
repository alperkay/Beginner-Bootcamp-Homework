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

let creature = new Object();

creature.name= "joker";
creature.heroic= false;
creature.inventory= [{type:"knife",damage:4}];
creature.health= 5;
creature.weapon= {type:"barehand",damage: 1};

// Game logic
/*
`rest` is a function that restores a creatures health to 10
    1. `rest` should have one parameter: `creature`. You can assume that creature has the same structure as your `hero` object
    2. modify the `health` of the `creature` object by assigning it `10`
    3. return the `creature`object from the function
*/
function rest(creature) {
  creature.health=10;
  return creature;
}
/*
`pickUpItem` is a function that adds an item to the inventory of a creature
    1. `pickUpItem` should have two parameters: `creature` and `item`. You can assume that creature has the same structure as your `hero` object and that `item` has the same structure as a `weapon` object.
    2. modify the `inventory` of the `creature` by adding the item to it.
    3. return the `creature` object from the function
*/
function pickUpItem(creature, item) {
  creature.inventory.push(item);
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
