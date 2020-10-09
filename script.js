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
/*
//Creating Objects using "New Object()" Syntax
var company = new Object();
company.name = "comapanyName";
company.ceo = "Tim Apple";
company.ceo.firstName = "Tim";
//This all works ^
company.lastname.iscool = "nah";
//^ this doesnt work because lastname is undefined
console.log("Company CEO is: " + company.ceo.firstName);
console.log(company["name"]); //this is the same as company.name
//- dot operator only works with valid js names 

//creating objects using object literal syntax
//original method
var a = new Object();
//better way: object literal (non initialized)
var b = {};
//better way: object literal initialized
var c = {
    name: "Pamela",
    ceo: {
        firstName: "Pamela",
        LastName: "wang"
    },
    $stock: 110,
    "these can be strings": "oh yea"
};

console.log(c);

*/

//-------------------------------------------------------
//Functions explained
function multiply(x, y) {
    return x * y;
}
//functions are first class datatypes - whatever you can do with a variable you can also do with functions
//functions are objects with special properties

console.log(multiply(5, 3));
//expected: 15;

//can set a property on the multiply function!
multiply.version = "version 1.0.0";

console.log(multiply);
//expected: function multiply(x, y) {
//    return x * y;
//}

console.log(multiply.version);
//expected: version 1.0.0

//FUNCTION FACTORIES
function makeMultiplier(multiply) {
    var myFunc = function(x) {
        return multiplier * x;
    };

    return myFunc;
    //value of myFunc will return
}

var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));
//expected = 30

var doubleAll = makeMultiplier(2);
console.log(doubleAll(100));
//expected: 200;

//passing functions as arguments
function doOperationOn(x, operation) {
    return operation(x);
}

var result = doOperationOn(5, multiplyBy3);
console.log(result);
//expected: 15

result = doOperation(100, doubleAll);
console.log(result);
//expected 200

//can treat functions as objects

//------------------------------------------------------------
//passing variables by value VS by reference

//Passing by Value: given b=a, changing b will not change a & vice versa
//Passing by reference: given b=a; changing b DOES change a & vice versa

//Primitaives: copied by value
//Objects: passed by reference

//Primatives: var = 7;
//var b=a;
// b = 7

//example: by reference VS by value

//by value
var a = 7;
var b = a;
console.log("a: " + a);
console.log("b: " + b);
//expected a: 7 b:7

b = 5;
console.log("a: " + a);
console.log("b: " + b);
//expected: a:7 b:5

//by reference
var c = { x: 7 };
var d = c;
console.log("c: " + c);
console.log("d: " + d);
//expected: Object{x:7} Object{x:7}

d.x = 5;
console.log("c: " + c);
console.log("d: " + d);
//expected: Object{x:5} Object{x:5}

//passing by value in functions

function changePrimitive(primVal) {
    console.log("Before: " + primValue);
    primVal = 5;
    console.log("after: ");
    console.log(primVal);
    //expected 5;
}

var value = 7;
changePrimitive(value);
console.log("original value:" + value);
//expected: 7

//passing by reference in functions
function changeObject(objVal) {
    console.log("Before: " + objValue);
    objVal.x = 5;
    console.log("after: ");
    console.log(objVal);
    //expected 5;
}

var value = 7;
changeObj(value);
console.log("original value:" + value);
//expected: 7

//------------------------------------------------------
//Functions Constructors, prototypes, and this keyword
//way to create objects in js

function test() {
    console.log("Hello");
    console.log(this);
    //expected: the global window object

    this.myName = "pam";

    //declaring a function as a parameter into test object
    this.getArea = function() {
        return Math.PI * Math.pow(this.radius, 2);
    };
}

test();
console.log(window.myName);
//expected: "pam"

//constructors
//capital for function constructor
function Circle(radius) {
    console.log(this);
    this.radius = radius;

    //declaring a function as a parameter into test object
    this.getArea = function() {
        return Math.PI * Math.pow(this.radius, 2);
    };
}

//FUNCTION NEEDED ******************* **********************
var myCircle = new Circle(10);
//makes this point to the circle

console.log(myCircle);
//expected: empty object with the name, "type" = circle

console.log(myCircle.getArea);
//area

//creating prototypes
//should not be in the Circle constructor because you don't need a
//new prototype each time
Circle.prototype.getArea = function() {
        return Math.PI * Math.pow(this.radius, 2);
    } //expected output: only the radisu NOT getArea
    //getArea is located under proto function (special)


//-----------------------------------------------------------
//Object literals and "this"

//object literal
var literalCircle = {
    radius: 10;
    getArea: function() {
        var self = this; //BUG FIX
        console.log(this);
        //expected output radisu:10
        //this refers to circle class NOT the global window
        //why does this work? Because object literals only refer
        //to local scope


        //NOTE: BUG
        var increaseRadius = function() {
            this.radius = 20;
            //BUG: radius does not change to 20
            //when you have a nested function, this starts pointing to the global object
            //to get around this: var self = this;
        };

        increaseRadius();

        return Math.PI * Math.pow(this.radius, 2);
    }

};

literalCircle.getArea();
//expected output: the area

//----------------------------------------------------------------
//Arrays in JS
//create array *****************************************
var array = new Array();
array[0] = "Pamela";
array[1] = 2;
array[2] = function(name) {
    console.log("Hello" + name);
};
array[3] = { course: "JS" };
console.log(array);
// expected: ["Pamela", 2, function(name), Object length:4]

console.log(array[1]);
//expected: 2

array[2]("My Name");
//this will invoke the function located at position 2
//expected: Hello My Name
//this is the same as:
array[2](array[0]);

//shorthand array notation**********************************
var names = ["pam", "wang", "test", ];

console.log(names);
//expected output: ["pam", "wang", "test"]

for (var i = 0; i < names.length; i++) {
    console.log("Hello" + names[i]);
}
//output all the arrays

//arrays can be SPARSE
names[100] = "Jim";
//expected output: 
//Hello pam
//Hello wang
//Hello test
//Hello undefined
//Hello Jim

var myObj = {
    name: "pam",
    course: "HTML/CSS/JS",
    platform: "Coursera"
}

//will traverse the object
for (var prop in myObj) {
    console.log(prop _ + ": " + myObj[prop]);
}
//expected output:
/*  name: "pam",
    course: "HTML/CSS/JS",
    platform: "Coursera"
*/

//issue: will output ALL properties, even over unapplicable data
for (var names in name) {
    console.log("Hello " + name[names]);
}

//expected output: 
/*  name: "pam",
    course: "HTML/CSS/JS",
    platform: "Coursera"
*/

//-----------------------------------------------------------
//Javascript closures
//SUPERDUPER IMPORTANT********************************************

//example: 
function makeMultiplier(multiplier) {

    function b() {
        console.log("Multiplier is: " + multiplier);
    }
    b();
    //expected: 2

    //doesn't create execution environment 
    //does not get outer reference
    //does not get this variable
    return (
        function(x) {
            return multiplier * x;
        }

        //since this returns within a return
        //js preserves the outer environment
    )
}

var doubleAll = makeMultipler(2);
console.log(doubleAll(10)); //return function only gets its own exec env
//expected output: 20

//---------------------------------------------------------------------------
//Fake namespaces
//occurs when functions step on the toes of other functions
//refer to lecture 52 part 1
//IMMEDIATELY INVOKED FUNCTION EXPRESSIONS IIFEs
//don't use fake namespaces

//example of IIFE
(function() {
    console.log("Something");
})();
//this produces and invokes a function at the same time
//use this in the script function so that it executes the second it loads
//pass the window object as a param of the function
/*
(function(window){
    //TODO CODE HERE

    window.fakeNamespaceName = fakeNamespaceName;
})(window);
*/

//DOM MANIPULATION----------------------------------
//window.document = entire html page
//document.getelementbyId("title");
//include script tag at the very bottom of the html file
//HTMLDocument : gives all functions that can be used to manipulate webpage

//DOM MANIPULATION------------------------------------
//onclick = "sayHello();"
function sayHello() {
    var name = document.getElementById("name").value;
    var message = "Hello " + name;

    document.getElementById("content").textContent = message;
}