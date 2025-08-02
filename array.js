// Array Basic 

// Acessing Elemnts 

let array = [1,2,3,4,5,6];

console.log(array[2]);

console.log(array[5]);

// Array Length 

console.log(array.length);  // Count elements


//  Changing a Value

array[2] = 10;
console.log(array);

// Adding Elements

array.push(7);  // Add to end
console.log(array);

array.unshift(0); // Add to start
console.log(array);

//  Removing Elements

array.pop(); // Remove from end
console.log(array);

array.shift(); // Remove from start
console.log(array);
