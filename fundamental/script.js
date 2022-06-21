setTimeout(wakeUpUser, 5000);
function wakeUpUser() {
    // alert("Are you going to stare at this boring page forever?");
}

let js = 'awesome';
// if (js == 'awesome') alert("Javascript is Fun!")

console.log(34 - 3 + 4 + 22);
console.log("Pravash");
console.log(23);

let firstName = "Roshan";
console.log(firstName);
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);


// Variable Name should be Descriptive

let myFristJob = 'Designer';
let mySecondJob = 'Developer';

let job1 = 'Designer';
let job2 = 'Developer';

// console.log(myFristJob, mySecondJob, job1, job2);

if (myFristJob == 'Designer') {
    console.log("Do you know figma?")
} else {
    console.log("Are you a developer?");
}

//Uncaught SyntaxError: Invalid or unexpected token
// let 3names = "Ram Hari Shyam";

/* Reserved keywords
break
case
catch
class
const
continue
debugger
default
delete
do
else
enum
export
extends
false
finally
for
function
if
implements
import
in
instanceof
interface
let
new
package
private
protected
public
return
static
super
switch
this
throw
true
try
typeof
var
void
while
with
yield 
*/

let javascriptIsFun = true;

let country = "Nepal";
let continent = "Asia";
let population = 30208107;

console.log(country);
console.log(continent);
console.log(population);


// Data Types
console.log(typeof true);
console.log(typeof 23);
console.log(typeof 4.41);
console.log(typeof 'Pravash');

javascriptIsFun = 'YES!'
console.log(typeof javascriptIsFun);

let ohMyUndefinedYear;
console.log(ohMyUndefinedYear);
console.log(typeof ohMyUndefinedYear);

ohMyUndefinedYear = 1998;
console.log(typeof ohMyUndefinedYear);

console.log(typeof null);



// ES6 (let and const)

let age = 30;
age = 31; // re-assigning the value (mutate the variables)


const birthYear = 1998; // https://css-tricks.com/understanding-immutability-in-javascript/ 
// birthYear = 1200;

// Prior to es6
var job = 'Teacher';
job = 'Teacher';