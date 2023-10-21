// Functions-Extra-Material
// Mubashir created a function that takes two numbers a and b and an operator o. 
//His function should return the result of the corresponding mathematical function on both numbers. 
//If the operator is not one of the specified characters +, -, /, *, or if there is a division by zero, 
//the function should return null. Help him by fixing the code in the code tab to pass this challenge.

// Look at the examples below to get an idea of what the function should do:

// Examples
// basicCalculator(2, '+',  4) ➞ 6

// basicCalculator(6, '-', 5) ➞ 1

// basicCalculator(12, '/', 3) ➞ 4

// basicCalculator(3, '*', 4) ➞ 12

// basicCalculator(1, '/', 0) ➞ null
// Division by zero is not possible

// basicCalculator(1, 'x', 0) ➞ null
// 'x' is not an operator
function  basicCalculator (n1,o,n2) {
    if(o === '+'){
        return n1+n2
    }
    else if ( o === '-' ){
        return n1-n2
    }
    else if (o === '*' ){
        return n1*n2
    }
    else if (o==="/"){
        if (n2!==0){
            return n1/n2
        }
        return "null div (can't devide by 0)"
        
    }
    
    else 
     {
        return null
    }
}


// Booleans-Extra
// Write a function called isLeapYear that takes a year as input and returns true if the year is a leap year (i.e., it's divisible by 4, but not divisible by 100 unless it's also divisible by 400), and false otherwise.
function isLeapYear (year){
    if ( year %4 === 0 && year %100!==0 || year %400 === 0       ){
        return true 
    }

        return false

}

// Write a function called isValidPassword that takes a string as input and returns true if it meets the following criteria:
// It has at least 8 characters
// It contains at least one uppercase letter, one lowercase letter, and one number
// It does not contain any spaces
// The function should return false otherwise.
// method 1 :
function valid (string){
    if (string.length >= 8 &&  string.charAt(0).toUpperCase() && string.toLowerCase() && /\d/.test(string) && (!(/\s/.test(string)))  ){
        return true 
}
   return false
}
// method 2 :
function valid (string){
    if (string.length >= 8 &&  /[A-Z]/.test(string) && string.toLowerCase() && /\d/.test(string) && (!(/\s/.test(string)))  ){
        return true 
}
   return false
}

// Write a function called hasUniqueCharacters that takes a string as input and returns true if all the characters in the string are unique (i.e., none of the characters repeat), and false otherwise.
  
// Write a function called isPrimeProduct that takes two positive integers as input and returns true if their product is a prime number, and false otherwise.