

function bs(arr, target){
    let left = 0;
    let right = arr.length - 1;

    while(left <= right){
        let mid = Math.floor((left + right) / 2) ;
        if(arr[mid] === target){
            return mid;
        }
        if(arr[mid] > target){
            right = mid - 1;
        }
        else if(arr[mid] < target){
            left = mid + 1;
        }
    }
    return - 1;
}

let arr = [11,13,15,17,19,21,23,25,27,29]
let target = 29;

let result = bs(arr, target);

if(result === -1){
    console.log(`Element not found`)
}
else{
    console.log(`Element found in this index ${result}`)
}