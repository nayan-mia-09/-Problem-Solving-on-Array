let marks = [65, 70, 80, 90, 50];

// Task 1: Update 2nd student's mark to 75

marks[1] = 75;


// Task 2: Update last student's mark to 60
marks[4] = 60;

// Task 3: Print the updated array
console.log(marks);

// Update Fruit Names

let fruits = ["apple", "banana", "mango", "grape"];

// Task:
// 1. Change "banana" to "orange"

fruits[1] = "orange";

// 2. Change "grape" to "watermelon"

fruits[3] = "watermelon";

// 3. Print the updated array
console.log(fruits);


// Fix Prices of Products

let prices = [100, 200, 300, 400, 500];

// Task:
// 1. The 3rd product had a wrong price. Change it to 350.

prices[2] = 350;

// 2. The last product is now 450.

prices[4] = 450;

// 3. Print the updated prices.
console.log(prices);


 // Increase All Marks by 5 (Using Loop)

let Marks = [60, 70, 80, 90];

// Task:
// Use a for loop to increase every student's mark by 5

 for( let i = 0; i < Marks.length; i++){
    Marks[i] = Marks[i] + 5;
 }
// Then print the updated marks
console.log(Marks);


//  Update Marks Below 90
let result = [60, 85, 75, 90, 50];

for(let i = 0; i < result.length; i++){
    if(result[i] < 90){
        result[i] = result[i] + 20;
    }
};

console.log(result);

