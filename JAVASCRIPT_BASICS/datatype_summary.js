//primitive

// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')


console.log(id === anotherId)

const bigNumber = 213456788765432345n

//Reference (Non Ptimitive)

//Array, Objects, Functions

const h1 = ["A","B","C"];
let myObj = {
    name: "Abc",
    age : 23,

}

const myFunction = function()
{
    console.log("Hello World..")
}

console.log(typeof anotherId);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack (Primitive), Heap (non-primitive)

let myYoutubeName = "youtubeDemo"
let anothername = myYoutubeName
anothername = "anothername"

console.log(myYoutubeName)
console.log(anothername)

let user
{
    email:"user@gmail.com"
    upi:"user@ybl"
}
