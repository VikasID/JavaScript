// functions

function hello() {
    // function body
    console.log("Hello World!");
}

hello();


//  Returning Functions

function returnMe() {
    // function body
    console.log("returning");
    return 5;
}
console.log(returnMe());

// parameterized functions

function add(x,y){
    return x+y;
}

console.log(add(15,25));

// default function parameters

function add (x,y=15)
{
    return x+y;
}
console.log(add(5));

//  rest parameters
function lengthOfMe(...params)
{
    return params.length;
}
console.log(lengthOfMe(5,6,7,8,9,0));

// function constructor

let func = new Function("x","y","return x*y;");
console.log(func(41,52));

// recursion
function factorial(num)
{
    if(num<=0)
    {
        return 1;
    }
    else
    {
        return(num*factorial(num-1));
    }
}
console.log(factorial(14));

// anonymous functions
(function()
{
    console.log("Where am I???");
})(); 
/*
--> Lambda functions
->parameters
->fat arrow notation
->statements
*/
//  variation 1
var food = (x,y,z) => x+y+z;
console.log("food:",food(15,25,36))

//  variation 2
var food = x => x+100;
console.log("food:",food(20));

// Generator functions

function* query()
{
    const name = yield "Whats your name?";
    const sport = yield "Whats your Fav Sport?";
    return `${name}'s fav sport is ${sport}`;
}
const instance = query();
console.log(instance.next());
console.log(instance.next("Vikas"));
console.log(instance.next("Cricket"));