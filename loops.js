// looping Statements

// Declarative looping


// for loop

var x =5;
var fact = 1;
for(let i =x;i>=1;i--)
{
 fact *= i;
}
console.log(fact)

//  For In loop

var object = { 'name': 'vikas', 'age': '21' }
for(let prop in object)
{
    console.log(object[prop])
}

//  For of
for(let item of [10,12,14,16,18] )
{
    console.log(item)
}