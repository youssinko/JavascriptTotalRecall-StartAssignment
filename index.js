
/* ================= A. Q + A ===============

How do we assign a value to a variable?
=> answer: use const/let/var , name your variable and use equal(=) sign then indicate the value 
How do we change the value of a variable?
=> answer: change the value indicated after the equal sign =
How do we assign an existing variable to a new variable?
=> answer: const can't be reassign, if "let" is used, type the name of the variable , use = sign then indicate the new value
Remind me, what are declare, assign, and define?
=> answer:declare = var, assign = let and define = const
What is pseudocoding and why should you do it?
=> answer: outline your ideas so it can be excuted using code , it will help the project move faster and more easily.
What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?

=> answer: 20% thinking and 80% coding

//============== B. Strings ===============

For all other questions that involve writing code, you can solve them via the following instructions.

Create a variable called firstVariable
=> answer: let firstVariable 
Assign it the value of the string "Hello World"
=> answer:let firstVariable = "Hello World"
Change the value of this variable to some number
=> answer: firstVariable = 5
Store the value of firstVariable in a new variable called secondVariable
=> answer: let secondVariable = firstVariable
Change the value of secondVariable to any string.
=> answer: secondVariable = "Hi"
What is the value of firstVariable?
=> answer: 5
Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
=> answer: let yourName = "Rania"
let greeting ="Hello,my name is"
console.log(greeting + " " + yourName)
ex: Hello, my name is Jean Valjean
*/
//==================C. Booleans =============
const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';
if(a < b){
console.log(true)};
if(c > d){
console.log(true)};
if('Kevin' === 'Kevin'){
 console.log(true); 
}

//   // FOR THE NEXT TWO, USE ONLY && OR ||
if (a < b || c < d){
    console.log(true)
}
 // console.log(true __ false);
 if ( c < d || a > b || d > b || e!='Kevin' || a > d || b < c){
    console.log(true)
 }
 // console.log(false __ false __ false __ false __ false __ true);
 if (c < d && a > b){
    console.log(true)
 }
 // console.log(false __ false)
 if ( e === 'Kevin'){
    console.log(true)
 }
 // console.log(e ___ 'Kevin');

//================== D. The farm ==========

// Declare a variable animal. Set it to be either "cow" or something else
// Write code that will print out "mooooo" if the it is equal to cow
// Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."
// Commit

let animal = 'cow';
if (animal === 'cow'){
    console.log('moooo')
}else {console.log("Hey! You're not a cow.")}

//============= E. Driver's Ed ===============

// Make a variable that holds a person's age; be semantic
// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."

let age = 38
if ( age >= 16){
    console.log("Here are the keys!")
}else if (age < 16){
    console.log("Sorry, you're too young.")
}
// ===================== II. Loops ===========

// Remember: USE let when you initialize your for loops!

// This is GOOD: for(let i = 0; i < 100; i++)

// This is NO GOOD: for(i = 0; i < 100; i++)

//=================== A. The basics ========

// Write a loop that will print out all the numbers from 0 to 10, inclusive
// Write a loop that will print out all the numbers from 10 up to and including 400
// Write a loop that will print out every third number starting with 12 and going no higher than 4000

let numbers = 10

for (let i = 0 ; i <= 10 ; i++){
  console.log(i)
}

for ( let i = 10 ; i <= 400; i++){
    console.log(i)
}
for (let i = 12; i < 4000; i+=3) {
    console.log(i)
}

// ================= B. Get even ============

// Print out the numbers that are within the range of 1 - 100
for (let i = 1 ; i <= 100 ; i ++){
console.log(i)
if ( i %2 === 0 ){
    console.log(i + "<-- is an even number")
}
}
// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"

//================= C. Give me Five ===============

//For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
//Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
//For numbers divisible by both three and five, be sure your code prints both messages
for ( let i = 1; i <100 ; i ++){
    if( i % 5 === 0 && i % 3 === 0){
        console.log("I found a " + i +" High five!")
    }
    
    if (i % 5 === 0 ){
        console.log("I found a " + i +" High five!")
    }
    if ( i % 3 === 0){
        console.log("I found " + i + " Three is a crowd")
    }
}
// ================ D. Savings account ============

// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// Check your work! Your bank_account should have $55 in it.
let bank_account = 0
for(let i = 1 ; i <=10 ; i++){
   bank_account +=i

}
console.log(bank_account)
// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your bank_account should have $10,100 in it.
let bank_accountNew = 0
for (let i = 1 ; i <= 100; i++){
    bank_accountNew += i * 2
    
}console.log(bank_accountNew)


// ================== III. Arrays & Control flow =================




// A. Talk about it:

// What are the things in an array called?  values
// Do Arrays guarantee those things will be in order? yes
// What real-life thing could you model with an array?  an array of eggs
//====================== B. Easy Does It ==============

//Create an array that contains three quotes and store it in a variable called quotes
const quotes = ['Life is Amazing','stay strong','stay focused']
// ============== C. Accessing elements ============

// Given the following array 
const randomThings = [1, 10, "Hello", true]

// How do you access the 1st element in the array?
 console.log(randomThings[0])
// Change the value of "Hello" to "World"
randomThings.splice(2,1,"World")

// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
console.log(randomThings)

//=================== D. Change values ===========

// Given the following array 
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

// What would you write to access the 3rd element of the array?
console.log(ourClass[2])
// Change the value of "Github" to "Octocat"
ourClass.splice(4,1,'Octocat')
console.log(ourClass)
// Add a new element, "Cloud City" to the array
ourClass.push('Cloud City')
console.log(ourClass)
// ========================== E. Mix It Up =================

// Note: You don't really need .splice() for these. You could use it, but there are simpler array methods that are more appropriate.
// // Given the following array: 
const myArray = [5, 10, 500, 20]


// Add the string "Aegon" to the end of the array. Add another string of your choice to the end of the array.
myArray.push('Aegon','Rania')
console.log(myArray)
// Remove the 5 from the beginning of the array.
myArray.slice(-1)
console.log(myArray.slice(-1))
// Add the string "Bob Marley" to the beginning of the array.
myArray.unshift('Bob Marley')
console.log(myArray)
// Remove the string of your choice from the end of the array.
myArray.pop()
console.log(myArray)
// Reverse this array using Array.prototype.reverse().Did you mutate the array? What does mutate mean? Did the .reverse() method return anything? 
//==> answer is only changed the order of the array but no mutation
myArray.reverse()
console.log(myArray)

// ================= F. Biggie Smalls =============

// Create a variable that contains an integer.
let num = 8
if(num < 100){
    console.log(`little number `)
}else if ( num >= 100){
    console.log(`big number`)
}

// Write an if ... else statement that:

// console.log()s "little number" if the number is entered is less than 100
// console.log()s big number if the number is greater than or equal to 100.
// =====================  G. Monkey in the Middle ========

// Write an if ... else if ... else statement:
let num2 = 8
if (num2 < 5){
    console.log('little number')
}else if( num2 > 10 ){
    console.log('big number')
}else{
    console.log('monkey')
}

// console.log() little number if the number entered is less than 5.
// If the number entered is more than 10, log big number.
// Otherwise, log "monkey". 

// ================= H. What's in Your Closet? =======
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  // Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];
  console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!" )
//   What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.

// Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".
kristynsCloset.splice(6,0,"raybans")
console.log(kristynsCloset)
// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
kristynsCloset.splice(5,1,"stained knit hat")
console.log(kristynsCloset)
// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
console.log(thomsCloset[0][0])
// In the same way, access one item from Thom's pants array.
console.log(thomsCloset[1][2])
// Access one item from Thom's accessories array.
console.log(thomsCloset[2][0])
// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log("Thom is looking fierce in a " + thomsCloset[0][0] + ", " +thomsCloset[1][1] + " and " +thomsCloset[2][1])
//Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[1][2]="Footie Pajamas"
console.log(thomsCloset[1])
// =================== IV. Functions ===========



// A. printGreeting

// Do you think you could write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting?

function printGreeting(name){
    return (`Hello, ${name}`)
}
console.log(printGreeting('Rania'))
//============== B. printCool =============

//Write a function printCool that accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.
function printCool(argument){
    return `${argument} is cool`
}
console.log(printCool('Rania'))

//================ C. calculateCube ================

//Write a function calculateCube that takes a single number and prints the volume of a cube made from that number
function calculateCube (volume){
volume = volume * volume * volume
return volume
}
console.log(calculateCube(5))

//================== D. isVowel ===================

//Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.
function isVowel(letter){
if (
    letter === 'a' || 
    letter === 'e' ||
    letter === 'i' || 
    letter === 'o' ||
    letter === 'u' 
    )
    {
   return true
}else{
  return false
}

}
console.log(isVowel('e'))

//========================= E. getTwoLengths =========

//Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.
const length1 = []

const getTwoLengths = function (param,param1){
   length1.push(param.length)
   length1.push(param1.length)
   return length1
  
}
console.log(getTwoLengths('hello','hi'))

//==================================== F. getMultipleLengths

//Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.
// const length2= []
// const getMultipleLengths = function(...args){
 
//     args.forEach((words) => {
          
//         console.log(words.length)
//        length2.push(words.length)
       
//     })
//     return length2
// }

//console.log(getMultipleLengths(['what','is','your','name','?']))
let length2 = []
const getMultipleLengths = function (stringArray){
    for (let i = 0 ;i <stringArray.length ; i++)
length2.push(stringArray[i].length)
return length2
}
console.log(getMultipleLengths(['what','is','your','name','?']))

//================== .G. maxOfThree ==============
// Define a function maxOfThreethat takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.

// console.log(maxOfThree(6, 9, 1));
// => 9
// Did you use Google and find Math.max()? If so, great job! Very resourceful—keep looking stuff up! However, for this particular question, we need you to submit a solution that does not use Math.max().
function maxOfThreethat(num1,num2,num3)
{
    if (num1 > num2 && num1 > num3){
        return num1
    }
    else if (num2 > num1 && num2 > num3){
        return num2
    }
    else if (num3 > num1 && num3 > num2){
        return num3
    }

}
console.log(maxOfThreethat(9,4,3))

//================= H. printLongestWord ==============
// Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.
let largest =[]

const printLongestWord = function(stringArray2){
    for(let i=0; i< stringArray2.length; i++)

    if(largest.length < stringArray2[i].length){
      
    
       largest = stringArray2[i]}
       else if
        (largest.length === stringArray2.length){
            return largest
        }
       
 
    return largest

 }
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max","Peanutbutter","hsnfshekdywh","big", "Todd"]))

//======================== A. Make a user object
//Create an object called user.
//Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchased to an empty array []. Set the other values to whatever you would like.
let user = {
    name:'Rania' ,
    email:'yousef@hotmail.com',
    age: 34,
    purchased:[],

}
user.email='rania@yahoo.com'

// ==================== B. Update the user ===========
// Our user has changed his or her email address. Without changing the original userobject, update the emailvalue to a new email address.
// Our user has had a birthday! Without changing the original userobject, increment the agevalue using the postfix operator. Hint: age++
user.age++

// ================= C. Adding keys and values ============
// You have decided to add your user's location to the data that you want to collect.
user.location= 'NYC'
console.log(user)
// Without changing the original userobject, add a new key locationto the object, and give it a value or some-or-other location (a string).
user.location = 'NJ'
console.log(user)
// ==================== .D. Shopaholic! ================
// Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchasedarray.
user.purchased.push("carbohydrates","peace of mind","Merino jodhpurs")

console.log(user.purchased[2])

// Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchasedarray.
// Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchasedarray.
// Console.log just the "Merino jodhpurs" from the purchasedarray.
// ================= E. Object-within-object ==================
// Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.

// If we want to give our user a friendwith a nameand age, we could write:

// user.friend = {
//     name: "Grace Hopper",
//     age: 85
// }
// When we console.log user, we would see the friend object added to our user object.
user.friend={name:'yousef', age: 6 ,location:'NYC',purchased:[] }
console.log(user)

// Write a friendobject into your userobject and give the friend a name, age, location, and purchased array (empty for now)
// Console.log just the friend's name
// Console.log just the friend's location
// CHANGE the friend's age to 55
// The friendhas purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchasedarray.
// The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.
// Console.log just "A latte" from the friend's purchasedarray.
user.friend.age = 55
user.friend.purchased.push("The One Ring","A latte")
console.log(user.friend.purchased[1])
// ========================= F. Loops =================
// Write a for loop that iterates over the User's purchasedarray (NOT the friend's purchased array), and prints each element to the console.
for(i=0; i<user.purchased.length; i++)
console.log(user.purchased[i])
for(i=0; i<user.friend.purchased.length ; i++)
console.log(user.friend.purchased[i])
// Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console.

// ========================== G. Functions can operate on objects ====================
// Write a single function updateUser that takes no parameters. When the function is run, it should:
updateUser = function(){
   console.log(user.age++)
   console.log(user.name.toUpperCase())
    
}
updateUser()
//console.log(user)
// it should increment the user's age by 1
// make the user's name uppercase
// The function does not need a return statement, it will merely modify the user object.

// Write a function oldAndLoud that performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our userobject, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoud function with user as the argument.
function oldAndLoud(person){
    console.log(person.age++)
   console.log(person.name.toUpperCase())

}
oldAndLoud(user)
//console.log(user)

// ===================== Cat Combinator =================




// ************ Mama cat *****************
// Define an object called cat1 that contains the following properties:
const cat1={
    name:'Oero',
    breed:"ragdoll",
    age:1
}
console.log(cat1.age)
console.log(cat1.breed)

// name
// breed
// age (a number)
// console.log the cat's age
// console.log the cat's breed

// ======================= 2. Papa cat ==============
// Define an object called cat2 that also contains the properties:
const cat2={
    name:'Marsh',
    breed:'persian',
    age:2,

}
// name
// breed
// age (a number)
//======================== 3. Combine Cats! ============
// The cats are multiplying!

function combineCats(mama,papa){
 mama.name= mama.name.concat(papa.name)
 mama.breed=mama.breed.concat(` - ${papa.breed}`)
 mama.age= 1
 return mama
}
           
           


console.log(combineCats(cat1,cat2))
// combineCats(cat1,cat2)
// combineCats({
//     name:'marsh',
//     breed:'persian',
//     age:2},{
//         name:'oero',
//         breed:"ragdoll",
//         age:1
//     })

console.log(combineCats(combineCats(combineCats(cat1,cat2),combineCats(cat1,cat2)),combineCats(combineCats(cat1,cat2),combineCats(cat1,cat2))))
// Write a function combineCats that has two parameters mama, and papa. The function will take two arguments -- each a cat object.

// Pass cat1and cat2as arguments to the combineCatsfunction. The function should console.log them.

// ================== 4. Cat brain bender ============
// If combineCats returns an object, and if combineCats takes objects as arguments, then it stands to reason that:

// catCombinat or can use itself as its own argument.

// Take a second to stew on that . . .

// What is the result of:

//console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));
// Whoa . . .

// The above console.log is two levels deep of combineCats.

// Write a console.log that is three levels deep of combineCats. combineCats should have two arguments, each which are combineCats, each which have two arguments, each which are combineCats.

//combineCats(combineCats(combineCats(cat1,cat2),combineCats(cat1,cat2)))