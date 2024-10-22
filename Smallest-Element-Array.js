/*
Given an array, we have to find the smallest element in the array:
1) sample input: 

input: arr[] = {2,5,1,3,0}
output: 0

2) sample input: 
input: arr[] = {8,10,5,7,9}
output: 5
*/

function findSmallest(arr) {
    if (arr.length === 0) 
        return null;
    let smallest = arr[0]; 
    for (let num of arr) {
        if (num < smallest) {
            smallest = num; 
        }
    } 
    return smallest;
}
