// The push() method adds the specified elements to the end of an array
// and returns the new length of the array.

var output = [];
var count = 1;

function fizzBuzz(output) {
    if (count % 3 === 0 && count % 5 === 0){
        output.push("FizzBuzz");

    }
    else if (count % 3 === 0) {
    output.push("Fizz");
}
    else if (count % 5 === 0){
        output.push("Buzz");
    }
    else {
        output.push(count);
    }

    count++;
    console.log(output);
}
