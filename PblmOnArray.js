function arrSecondLargest(arr){
    let n = arr.length;

    arr.sort((a,b) => a - b);

    for(let i = n - 2; i >= 0 ; i --){

        if(arr[i] != arr[n-1]){
            return arr[i]
        }
    }
    return -1
}

const arr = [1,2,5,4,8,3,7,6,9];
console.log(arrSecondLargest(arr))


// Method 2 

// function LargestAndSecondLargest(arr2){
//     let n = arr2.length;

//     let largest = -1;
//     let secondLargest = -1;

//     for(let i = 0; i < n; i ++){
//         if(arr2[i] > largest){
//             secondLargest = largest
//             largest =arr2[i]
//         }else if(arr2[i] < largest && arr2[i] > secondLargest){

//             secondLargest = arr2[i]
//         }
//     }
//     return [largest, secondLargest]
// }

// const arr2 = [1,6,5,7,3,2,9,4,8]
// console.log(LargestAndSecondLargest(arr2))


// Largest and Second Largest

function LargestAndSecondLargest(arr2){
    let n = arr2.length;

    let largest = -1;
    let secondLargest = -1;

    for(let i = 0; i < n ; i ++){
        if(arr2[i] > largest){
            secondLargest = largest
            largest = arr2[i]
        }else if(arr2[i] < largest && arr2[i]> secondLargest){
            secondLargest = arr2[i]
        }
    }

    return largest + secondLargest
}

const arr2 =[10,25,14,69,27,40,65,21,87,16,30]
console.log(LargestAndSecondLargest(arr2))