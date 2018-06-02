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
hero.inventory= ['shitload of shit'];
hero.health= 10;
hero.weapon= {type: "nunchaku", damage:5}

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
// UI
