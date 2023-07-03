/*1. same keys and values*/
function createInstructor(firstName, lastName){
  return {
    firstName: firstName,
    lastName: lastName
  }
}

/*ES2015*/

function myCreateInstructor(firstName, lastName){
    return{
        firstName,
        lastName
    }
}

/* 2. computed property names*/
var favoriteNumber = 42;
var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"

/*ES2015*/
let favNumb = 27;
let instruct = {
    title: "instructor"
}

instruct[8 + 19] = "19 is the 8th prime";

/*3. object methods*/

var instructor = {
  firstName: "Colt",
  sayHi: function(){
    return "Hi!";
  },
  sayBye: function(){
    return this.firstName + " says bye!";
  }
}

/*ES2015*/

let instructorObj = {
    firstName: "Colt",
    sayHi(){
        return "Hi!";
    },
    sayBye(){
        return "Bye!";
    }
}

/*4. createAnimal function*/

const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
d.bark()  //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
s.bleet() //"BAAAAaaaa"

/*ES2015 function*/

function createAnimal(species, action, sound){
    return{
        species,
        [action](){
            return sound;
        }
    };
}