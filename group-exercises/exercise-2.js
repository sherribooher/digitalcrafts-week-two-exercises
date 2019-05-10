// Given an array of student's birth years, [1991, 1984, 1984, 1989], return the most common birth year.
var birthYears = [1991, 1984, 1984, 1989];

function mostCommon(years) {
  var counts = {}; // count occurrence of item here
  var compare = 0; // compare using a stored value
  var mostFrequent; // store most frequent item

  for (var i = 0; i < birthYears.length; i++) {
    var year = years[i];

    if (counts[year] === undefined) {
      // if that year does not exist in the count
      counts[year] = 1; // add the year and count 1 occurrence
    } else {
      counts[year] += 1; // increment existing value
    }

    if (counts[year] > compare) {
      compare = counts[year];
      mostFrequent = years[i];
    }
  }
  return mostFrequent;
}

console.log(mostCommon(birthYears));

// Given a string "This is a random string", write a function that returns a count of each character in the string.

var random = "This is a random string";

function countChars(randomString) {
  var numChars = {};
  var txt = random.split(" "); // split the string into an array of words
  var letters = txt.join(); // join the words in the array to become letters

  for (var i = 0; i < letters.length; i++) {
    // loop through the letters array
    var currentItem = letters[i]; // set each letter as a property of the object numChars
    if (!numChars[currentItem]) {
      // if a letter is not in the object, add it
      numChars[currentItem] = 0; // set the count of that letter to 0
    }
    numChars[currentItem]++; // if the letter already exists in the object, add 1 to the count
  }
  return numChars; // return the olympics2000 as an object (letter count)
}

console.log(countChars(random));

// Given an array of Olympic race olympics2000, [{country: "usa", time: 233}, {country: "poland", time: 222}, ...], write a function that returns each country's best time.

function findBestTimes(times) {
  var results = {};

  for (var i = 0; i < times.length; i++) {
    var currentRecord = times[i];

    if (!results[currentRecord.country]) {
      results[currentRecord.country] = currentRecord.time;
    } else {
      if (currentRecord.time < results[currentRecord.country]) {
        results[currentRecord.country] = currentRecord.time;
      }
    }
    return results;
  }
}
var olympics2000 = [
  { country: "USA", time: 244 },
  { country: "Poland", time: 232 },
  { country: "USA", time: 222 },
  { country: "Australia", time: 144 },
  { country: "Australia", time: 254 },
  { country: "USA", time: 143 }
];

console.log(findBestTimes(olympics2000));

// Given a list of numbers, [-1, 5, -25, -3, 99, 20], write a function that returns the count of positive numbers and negative numbers.
var numbers = [-1, 2, -25, -3, 99, 20];

function countingNums(nums) {
  var posOrNeg = {
    positive: 0,
    negative: 0
  };

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      posOrNeg.positive += 1;
    } else {
      posOrNeg.negative += 1;
    }
  }
  return posOrNeg;
}

console.log(countingNums(numbers));
