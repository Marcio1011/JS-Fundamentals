// OBJECTS
// JavaScript objects are collections of key-value pairs (properties). 
// They are used to store multiple related values as a single entity.

// Declare an object named 'customer' using object literal syntax {}.
var customer = {
    // Property 1: A string key 'firstName' with a string value "John".
    firstName: "John",
    // Property 2: A string key 'lastName' with a string value "Doe".
    lastName: "Doe",
    // Property 3: A key 'cars' with an array of strings as its value.
    cars: ["Volvo", "Toyota", "Tesla"] 
}

// ACCESSING AND UPDATING OBJECT PROPERTIES

// Dot Notation
// The most common and preferred way to access or modify a property
// when the key name is known and a valid identifier.
customer.firstName = "Jane"; 
// The 'firstName' property is updated from "John" to "Jane".

// Bracket Notation
// Required when the key is stored in a variable, contains spaces, or starts with a number.
// Here, it's used to update the 'lastName' property.
customer["lastName"] = "Smith"; 
// The 'lastName' property is updated from "Doe" to "Smith".

// Outputting the updated customer name.
// NOTE: The original code used single quotes, which does NOT perform interpolation.
// Assuming the intent was to use a Template Literal (backticks `) for interpolation:
console.log(`${customer.firstName} ${customer.lastName}`)
// Output: Jane Smith (The current firstName and lastName values are retrieved)
// If the intent was literal single quotes: console.log('${customer.firstName} ${customer.lastName}')
// Output would be: ${customer.firstName} ${customer.lastName}

// ARRAYS
// JavaScript arrays are ordered lists of values, indexed starting from 0.

// Declare an array named 'car' containing three string elements.
var car = ["Volvo", "Toyota", "Tesla"] 

// Access the element at index 0 (the first element) of the 'car' array.
console.log(car[0]); 
// Output: Volvo (The value at the first position in the array)

// Update the element at index 1 (the second element) of the 'car' array.
car[1] = "Honda";
// The array 'car' is now: ["Volvo", "Honda", "Tesla"]

// Access the element at index 0 of the 'cars' array that is nested inside the 'customer' object.
console.log(customer.cars[0])
// Output: Volvo (Accesses the 'cars' property of the 'customer' object, then the first element [0] of that array)


