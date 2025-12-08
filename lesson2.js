//concatination and interpolation

// Declare a variable named 'price' using the 'var' keyword
// and assign it the numeric value 50.
var price = 50 

// Declare a variable named 'itemName' using the 'var' keyword
// and assign it the string value "cup".
var itemName = "cup"

// Create a string by combining (concatenating) literal strings 
// and the values of the 'itemName' and 'price' variables using the '+' operator.
// This is the traditional way to build strings in older JavaScript.
var messageToPrint = "The price for your "+itemName+" is "+price+" dollars" // Concatenation (traditional string joining)

// Create a string using a template literal (backticks `). 
// This allows for 'interpolation', where variables are embedded directly
// into the string using the ${variableName} syntax. This is the modern,
// cleaner way to build complex strings in JavaScript (ES6+).
var messageToPrint2 = `The price for your ${itemName} is ${price} dollars` // Interpolation (modern template literal)

// Output the first string ('messageToPrint') to the console.
// The output will be: The price for your cup is 50 dollars
console.log(messageToPrint)

// Output the second string ('messageToPrint2') to the console.
// The output will be the same as the first message.
console.log(messageToPrint2)