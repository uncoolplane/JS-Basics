//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

function isTyler(name) {
  if (name === 'Tyler') {
    return true;
  } else {
    return false;
  }
}

console.log ('isTyler("John")=' + isTyler("John"));
console.log ('isTyler("Tyler")=' + isTyler("Tyler"));

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.
function getName() {
  return prompt();
}

console.log(getName());
//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

function welcome() {
  alert("Welcome, " + getName());
}
welcome();

//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  //Answer Here
//parameters are used by function declaration
//arguments are passed in when the function is called

//////////////////PROBLEM 5////////////////////

//What are all the falsy values in JavaScript and how do you check if something is falsy?

// false
// zero (0)
// "" (empty string)
// null
// undefined
// NaN (not a number)

function testFalsy(){
  var a = (false == false);
  console.log("false-->" + a);

  var b = (false == "");
  console.log('""-->' + b);

  var c = (false == undefined);
  console.log("undefined-->" + c);

  var d = (false == null);
  console.log("null-->" + d);

  var e = (false == NaN);
  console.log("NaN-->" + e);

  var f = (null == false); // false
  console.log("null == false-->" + f);
  var g = (null == null); // true
  console.log("null == null-->"+g);
  var h = (undefined == undefined); // true
  console.log("undefined == undefined-->"+h);
  var i = (undefined == null); // true
  console.log("undefined == null-->"+i);
  var j = (NaN == null); // false
  console.log("NaN == null-->"+j);
  var k = (NaN == NaN); // false
  console.log("NaN == NaN-->"+k);
}

testFalsy();
// The falsy values null and undefined are not equivalent to anything except themselves:
// Finally, the falsy value NaN is not equivalent to anything — including NaN!

//////////////////PROBLEM 6////////////////////

//Create a function called myName that returns your name

function myName() {
  return "Becky";
};

//Now save the function definition of myName into a new variable called newMyName

var newMyName = new Function(myName());

//Now alert the result of invoking newMyName

alert(newMyName);

//////////////////PROBLEM 7////////////////////

//Create a function called outerFn which returns an anonymous function which returns your name.
var outerFn = function () {
    var name = "Becky";
    return function () {return name;}
};

//Now save the result of invoking outerFn into a variable called innerFn.
 var innerFn = outerFn();

//Now invoke innerFn.
console.log(innerFn);
