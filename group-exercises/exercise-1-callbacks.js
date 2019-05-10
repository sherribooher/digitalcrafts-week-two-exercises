// Given an array of people's names["Lachlan", "Kim", "Moira"], write a function that logs "Hi, [name]!" for each person.

var people = ["Lachlan", "Kim", "Moira"];

people.forEach(function(person) {
  console.log("Hi, " + person + "!");
});

// Given an array of a first, middle, and last name, ["Adam", "Michael", "Szaruga"], write a function that prints the person's initials.

var names = ["Adam", "Michael", "Szaruga"];
var initials = "";

names.map(function(name) {
  initials += name.charAt(0);
});
console.log(initials);

// Given a list of 0's and 1's, [0, 1, 0, 1, 1, 1, 0, 0], write a function that returns the index of the last 1 in the array.

var arr = [0, 1, 0, 1, 1, 1, 0, 0];
var lastIndexOfAOne = 0;

arr.forEach(function(element, i) {
  if (element == 1) {
    lastIndexOfAOne = i;
  }
});
console.log(lastIndexOfAOne);

// Given a list of positive numbers, [1, 5, 25, 3, 99, 20], write a function that returns the biggest number.

var numbers = [1, 5, 25, 3, 99, 20];
var largestNumber = 0;

numbers.forEach(function(number, i) {
  if (number > largestNumber) {
    largestNumber = number;
  }
});
console.log(largestNumber);
