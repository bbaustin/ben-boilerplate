console.log('Hello, I am working.');

/*
Problem #1

Forgot how old you are? Calculate it!

Write a function named calculateAge that:

Takes 2 arguments: birth year, current year.
Calculates the 2 possible ages based on those years.
Outputs the result to the screen like so: "You are either NN or NN"
Call the function three times with different sets of values.
Bonus: Figure out how to get the current year in JavaScript instead of passing it in.
Problem 2

The Lifetime Supply Calculator

Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

Write a function named calculateSupply that:

Takes 2 arguments: age, amount per day.
Calculates the amount consumed for rest of the life (based on a constant max age).
Outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
Call that function three times, passing in different values each time.
Bonus: Accept floating point values for amount per day, and round the result to a round number.
*/

function calculateAge(birthYear) {
  var year = new Date();
  return "You are either " + (year.getFullYear() - birthYear - 1) + " or " + (year.getFullYear() - birthYear) + ".";
}


function calculateSupply(maxAge, amountPerDay) {
  
  function calcAge(birthdate) {
    var year = new Date();
    return year.getFullYear() - birthdate;
  }

  var lifeLeft = maxAge - calcAge(); 

  return "You will need " + (amountPerDay * lifeLeft) + " to last you until the ripe old age of " + maxAge + "."; 
}

console.log(calculateAge(1990));
console.log(calculateSupply(100, 2));
