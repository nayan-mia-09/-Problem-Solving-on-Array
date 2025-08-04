//1
let arr = [30,12,5,48,2,6,17,1];


// ascending order sorting
arr.sort((a,b) => a - b);
console.log(arr);


// descending order sorting
arr.sort((a,b) => b - a);
console.log(arr);

// 2
let numbers = [45, 12, 78, 3, 22];


// ascending order sorting 

numbers.sort((a,b) => a - b);
console.log(numbers); 


// descending order sorting

numbers.sort((a,b) => b - a);
console.log(numbers);


// 3 

let names = ["Zara", "Anik", "Lima", "Babul", "Tania"];

// ascending order sorting
names.sort();
console.log(names)


//descending order sorting

names.sort().reverse();
console.log(names);

// 4

let students = [
  { name: "Rakib", age: 22 },
  { name: "Sadia", age: 19 },
  { name: "Tanvir", age: 24 },
  { name: "Nadia", age: 20 }
];

// ascending order sorting

students.sort((a,b) => a.age - b.age );
console.log(students);

//descending order sorting

students.sort((a,b) => b.age - a.age);
console.log(students);



// Searching 

// Binary Search 



function bs(bsArr, target){
  let left = 0;
  let right = bsArr.length - 1;

  while(left <= right){
    let mid = Math.floor(left + right ) / 2;
    if(bsArr[mid] === target){
      return mid;
    }
     if(bsArr[mid] > target){
      right = mid - 1;
     }

     else if(bsArr[mid] < target){
      left = mid + 1;
     }
  }
  return - 1;
}

let bsArr = [1,2,3,4,5,6,7,8,9];
let target = 5;

let result = bs(bsArr, target);

if(result === - 1){
  console.log("Element not Founded")
}
else{
  console.log(`Element found in this index ${result}`);
};
