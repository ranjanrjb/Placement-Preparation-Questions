/*
Example:
Input: [1,2,4,7,7,5]

output: 
second smallest: 2
second largest: 5
*/

function findSecondLargestAndSmallest(arr) {
    if (arr.length < 2) {
        return {
            secondSmallest: -1,
            secondLargest: -1
        };
    }

    let smallest = arr[0];
    let secondSmallest = arr[0];
    let largest = arr[0];
    let secondLargest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    secondSmallest = largest;
    secondLargest = smallest;
  
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > smallest && arr[i] < secondSmallest) {
            secondSmallest = arr[i];
        }
        if (arr[i] < largest && arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    }
//When entered an array with non unique elements multiple times
    if (secondSmallest === largest) {
        secondSmallest = -1;
    }
    if (secondLargest === smallest) {
        secondLargest = -1;
    }

    return {
        secondSmallest: secondSmallest,
        secondLargest: secondLargest
    };
}
