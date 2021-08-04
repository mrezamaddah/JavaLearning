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
