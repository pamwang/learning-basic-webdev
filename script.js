//no types are declared
//JS is dynamically typed language
//Same var can hold different types


/*declare a function:
    (1) function functionName(){}
    (1) var functionName = function () {}
    INVOKE FUNCTION: 
    functionName();

    DECLARE A FUNCTION WITH ARGUMENTS
    function functionName(arg1, arg2){}
    INVOKE FUNCTION: 
    functionName(arg3, arg4);

    DECLARE A FUNCTION WITH RETURNS
    function functionName(arg1, arg2){return x;}
    INVOKE FUNCTION
    var variable = functionName(arg3, arg4);
*/

/* SCOPES

1. Global Scopes
- vars and functions which are available everywhere

2. Function (lexical)
- depends on where the variable is declared
- functions signify a new scope
- in this scope are available only within this function
- you can declare functions also inside functions

SCOPE CHAIN
- function invocation creates a new execution context which has:
    - own variable enviroment
    - get 'this' object
    - reference to its outer enviroment
- how scope chain works
    - referenced variable will be searched for in its current scope first
    - if not found ->look outwards
    - keeps going until global scope is reached
    - otherwise it is undefined
*/

/*
//EXAMPLE Defining variables function and scope
var message = " in global";
console.log("global: message =" + message);
//global: message = in global

var a = function() {
    var message = "inside a";
    console.log("a: message = " + message);
    b();
    //global: message = in global
    // a: message = inside a
    //B:message =  in global
}

function b() {
    console.log("B:message = " + message);
}


a();
//a: message = inside a
*/

//------------------------------------------------------------------------------------------

//JAVASCRIPT TYPES
/*
    Types - a paticular data structure
        - JS have 7 built in types
    (7) Object - collection of name/value pairs: 
        example: 
            firstName: "Wang",
            lastName: "Pamela",
            social: {"a", "b", "c"};
        - can contain many different types of data
    Primitive Type - represents a single, immutable value = NOT AN OBJECT, CANNOT BE CHANGED

    JS PRIMITIVE TYPES: 
    (1) Boolean - true/false
    (2) Undefined - no value has ever been set (not initialized)
                  - can only have one value: undefined
                  - lacks definition
                  - has be defined but NOT set to value
                  - NOT the same as "not defined"
    (3) NULL - signifies lack of value
    (4) Number - only numberic type
              - double preceision 64 bit float
    (5) String - sequence of characters
    (6) Symbol - NOT REALLY COVERED (New to em6)

*/
/*
//JS TYPES EXAMPLES
var x;
console.log(x);
//expected value = undefined

if (x == undefined) {
    console.log("x is undefined");
} else {
    console.log("x is defined");
}

//expected: x is undefined
*/

//---------------------------------------------------------------------------------
//COMMON LANGUAGE CONSTRUCTS

/*
//string concatenation:
var string = "Hello";
string += "World";
console.log(string + "!");
//expected: HelloWorld!
*/

/*
//regular math operators:
console.log((5 + 4) / 3);
//expected: 3

console.log(undefined/5);
//expected: NaN (aka. Not a Number)
*/

/*
//equality
var x = "4",
    y = 4;
if (x == y) {
    console.log("x='4' is equal to y=4");
}
//what's going on? Type coersion = automatic type conversion


//strict equality
if (x === y) {
    console.log("Strict: x='4' is equal to y=4");
} else {
    console.log("Strict: x is NOTE equal to y");
}
//expected ^^
*/

/*

//if statement
if(false||null||undefined||""||0||NaN){
    console.log("These are all considered false, this line wont execute,");
}
else if(true && "hello" && 1 && -1 && "false"){
    console.log("These are all true, this line will execute!");
}

*/

//----------------------------------------------------------------------------
//Handling Default Values

function orderChickenWith(sideDish) {
    console.log("Chicken with " + sideDish);
}

//what happens when:
orderChickenWith();
//result: Chicken with undefined
//Handling value: create default when undefined
//use if statement 
//shortcut: sideDish = sideDish || alternate;

//-----------------------------------------------------
//Creating Objects using "New Object()" Syntax
var company = new Object();
company.name = "comapanyName";
company.ceo = "Tim Apple";
company.ceo.firstName = "Tim";
//This all works ^
company.lastname.iscool = "nah";
//^ this doesnt work because lastname is undefined
console.log("Company CEO is: " + company.ceo.firstName);
console.log(company["name"])