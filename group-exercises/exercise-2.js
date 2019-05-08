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

// Given an array of Olympic race results, [{country: "usa", time: 233}, {country: "poland", time: 222}, ...], write a function that returns each country's best time.

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
