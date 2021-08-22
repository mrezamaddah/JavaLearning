//create a repostory from command line github:
//curl -u "$username:$token" https://api.github.com/user/repos -d '{"name":"'$repo_name'"}'
// Ref: https://www.viget.com/articles/create-a-github-repo-from-the-command-line/
//__________________________________________________________________
console.log('Hello Mohammad')
var answer=4;
console.log('Should be true: ', answer===4);

// var elements = document.getElementById("title");
// console.log(elements[0]);
// var target = elements[1];
// console.log(elements[0])
// target.innerHTML = "DISCOVER YOUR INNER HACKER";
// target.style.background = "black";
// target.style.color = "white";

var isRaining=true;

function returnACharacter(string, index) {
    ch=string[index];
    return ch;
    // returns string character at given index
  }
  
  console.log(returnACharacter('Baba',2));

  // Two types of data are arrays and objects
  //Arrays:
var fruits=['cherry','appricot ','plum','watermelon'];
console.log(fruits[1]);

var scores=[1,52,31,22];
console.log(scores[1]);
console.log('firstFruit:', fruits[0]);
console.log('thirdScore:', scores[2]);

//Empty Arrays
var emptyArray=[];
console.log(emptyArray); // is not indefinite

//Return Values for Functions, and using a variable as an argument
function returnArry(array){
    return array;
}

resultArray=returnArry(scores);
console.log('Result Arry is:',resultArray );

function returnAnElement(array, index){
    return array[index];
}
var ind=2;
console.log(`the`,ind ,'of the fruits array is:',returnAnElement(fruits,ind));

//---------------------------------------------------------------------------
// Objects
// objects are collections f properties
// boolian objec
var firstBooleanObject={
    isObject:true,
    isString:false


};

var stringObject={
    nameOfString:"text",
    isBoolian:"No"
}

var numberObject={
    count:10,
    sum:15
}


console.log('Access with dot notation', stringObject.isBoolian); /// First method Access to the property in the object
console.log('Access with backet notation', stringObject['isBoolian']); /// Second method Access to the property in the object


// Empty Objects
// An object does not need to have any properties to still be considered an object
// In some cases, it might be useful to establish a variable as an object, without actually adding any properties to it


//The typeof issue
console.log(typeof undefined);
console.log('type of true:', typeof true);
console.log('type of 4.0:', typeof 4.0);
console.log('type of 9:', typeof 9);

console.log('type of an array:', typeof [3, 4, 5]); //typeof is not working for arrays and only return "object"

console.log('Is an array?:', Array.isArray([3, 4, 5])); // isArray is a property to 
//check if the object is array

//Return Values for Functions______________
function returnObject(object){
    return object;
}

var user ={
    id:4,
    name: "moh Madah",
    occupation: 'none'
}

var resultObject=returnObject(user);
console.log('result object:',resultObject);

function returnValueWithKey(object, key){
    return object[key];
    //or
     //return object.key; with this method we cannot return a property of an object
};

var resultVar=returnValueWithKey(user,'name');
console.log('the second element is:',resultVar);

// we will now declare a function that 
//takes no parameters, creates an object, and returns the newly created object
function createObject(){
    var sampleobject={
        param1:'param1',
        param2: 2
    }

    return sampleobject;

}

console.log(createObject())

// let us write a function that returns the type of argument 
//the function has been called with (assume the argument will be scalar - not a collection)
function returnTypeOfArgument(arg){
    return typeof arg;
}

console.log(returnTypeOfArgument(2 ))

function ifItsAnArray(input){
    return Array.isArray(input);

}

console.log('The input is array?',ifItsAnArray({2:31} ));
console.log({2:9})

var typeOfOperand = typeof {a: 1};
console.log('some message:', typeOfOperand);