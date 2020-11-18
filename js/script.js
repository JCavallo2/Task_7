// write a function that takes the input string and reverses it
// example
// argument: Hello
// return: olleH
function reverseThisString(string){
    let r = '';

    for(let i = string.length - 1; i >= 0; i--){
        r += string.charAt(i);
    }
    
    return r;
}

console.log(reverseThisString('Hello'));

// write a function that takes the input string and switches all uppercase characters to lowercase and lowercase charcaters to uppercase
// example:
// argument: Hello World
// return: hELLO wORLD
function swapCase(string) {
    let r = '';

    for(let i = 0; i < string.length; i++){
        if(string.charAt(i) === (string.charAt(i)).toUpperCase()){
            r += (string.charAt(i)).toLowerCase();
        }
        else {
            r += (string.charAt(i)).toUpperCase();
        }
    }
    
    return r;
}

console.log(swapCase('Hello World'));

//convert array of numbers from farenheit to celcius
// example:
// argument: [23, 32, 41, 50, 59]
// return: [-5, 0, 5, 10, 15]
// hint: use Array.map
function toCelcius(array){
    const arr = array.map(
        x => (x - 32) * (5/9)
    );
    
    return arr;
}

console.log(toCelcius([23, 32, 41, 50, 59]));

//write a function that takes an input array and returns an array of booleans (>=75) or fail (<75)
// example:
// argument: [20, 30, 50, 80, 90, 100]
// return: [false, false, false, true, true, true]
// hint: use Array.map
function passOrFail(array){
    const arr = array.map(
        x => x >= 75
    );
    
    return arr;
}

console.log(passOrFail([20, 30, 50, 80, 90, 100]));

//write code that loops through the two variables returns an array ['2 is zwei', '3 is drei', '4 is vier', '5 is fünf', '6 is sechs']
// example:
// return: ['2 is zwei', '3 is drei', '4 is vier', '5 is fünf', '6 is sechs']
// hint: use Array.forEach, Array.map or a for loop
function germanNumbers(){
    const cardinalNumbers = [2,3,4,5,6];
    const germanNumbers = ['zwei', 'drei', 'vier', 'fünf', 'sechs'];
    const arr = [];

    for(let i = 0; i < cardinalNumbers.length; i++){
        arr[i] = `${cardinalNumbers[i]} is ${germanNumbers[i]}`
    }
    
    return arr;
}

console.log(germanNumbers());

// write code that returns an array of ONLY prime numbers that are in the array numbers
// example: 
// return [2, 3, 5, 7, 11, 13]
// hint use: Array.filter
function returnPrimeNumbers(){
    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    const arr = numbers.filter(function(num){
        if(num === 1) return false;
        else if(num === 2) return true;
        else{
            for(let i = 2; i < num; i++){
                if(num % i === 0) return false;
            }
        }
        return true;
    });
    
    return arr;
}

console.log(returnPrimeNumbers());

//Write a function that loops through and console.log's the numbers from 1 to 100, except multiples of three, log (without quotes) "CSC225 RULES" instead of the number, for the multiples of five, log (without quotes) "I LOVE JAVASCRIPT". For numbers which are multiples of both three and five, log (without quotes) "CSC225 RULES I LOVE JAVASCRIPT" 
function logNumbers(){
    for(let i = 1; i <= 100; i++){
        if(i % 3 === 0  && i % 5 === 0) console.log('CSC225 RULES I LOVE JAVASCRIPT');
        else if(i % 3 === 0) console.log('CSC225 RULES');
        else if(i % 5 === 0) console.log('I LOVE JAVASCRIPT');
        else console.log(`${i}`);
    }
}

logNumbers();