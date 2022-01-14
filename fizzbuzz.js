
function fizzBuzz (n) {
    // created a func called fizzBuzz and passing a parameter n
    for (var i = 1; i <= n; i++) {
        // using a for loop and initializing iterator to 1, setting range between iterator and the number that will be passed and incrementing iterator 
        if ((i % 3 === 0) && (i % 5 === 0)) {
            // when incrementing iterator...if divisble by 3 and 5 evenly then print out 'FizzBuzz'
            console.log("Fizz Buzz");
        }
        else if (i % 3 === 0){
            // if divisible by 3 then print out 'Fizz'
            console.log("Fizz");
        }
        else if (i % 5 === 0) {
            // if divisble by 5 then print out 'Buzz'
            console.log("Buzz");
        } 
        // print out any number that is not affected by these cases
        else console.log(i);
    }
}
// calling func and passing a num
fizzBuzz(50);