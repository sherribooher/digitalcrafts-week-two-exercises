// Given an array of people's names ["Lachlan", "Kim", "Moira"], write a function that logs "Hi, [name]!" for each person.

function sayHello(arrayNames) {
  for (var i = 0; i < arrayNames.length; i++) {
    var currentName = arrayNames[i];
    console.log("Hi, " + currentName + "!");
  }
}

sayHello(["Lachlan", "Kim", "Moira"]);

// Given an array of a first, middle, and last name ["Adam", "Michael", "Szaruga"], write a function that prints the person's initials.

function getInitials(arrayNames2) {
  for (var i = 0; i < arrayNames2.length; i++) {
    console.log(arrayNames2[i][0]);
  }
}

getInitials(["Adam", "Michael", "Szaruga"]);

// Given a list of 0's and 1's, [0, 1, 0, 1, 1, 1, 0, 0], write a function that returns the index of the last 1 in the array.
function findLast(arrayBinary) {
  var last = arrayBinary.lastIndexOf(1);
  console.log(last);
}

findLast([0, 1, 0, 1, 1, 1, 0, 0]);

// Given a list of positive numbers, [1, 5, 25, 3, 99, 20], write a function that returns the biggest number.

function getLargest(arrayNums) {
  var largest = 0;
  for (var i = 0; i <= arrayNums.length; i++) {
    var num = arrayNums[i];
    if (num > largest) {
      largest = num;
    } else {
      continue;
    }
  }
  console.log(largest);
}

getLargest([1, 5, 25, 3, 99, 20]);
