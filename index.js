//! 1  find duplicate in an array


// function findDuplicate(arr){
//     let duplicates = []

//     for(let i = 0;i<arr.length-1;i++){
//         for(let j=i+1 ; j<arr.length; j++){
//             if(arr[i] == arr[j]){
//                 if(!isArray(duplicates,arr[i])){
//                     duplicates.push(arr[i])
//                 }
//             }
//         }
//     }
//     console.log(duplicates)
// }

// function isArray(arr,elem){
//     for(let i = 0;i<arr.length;i++){
//         if(arr[i] == elem){
//             return true
//         }
//     }
//     return false
// }


// findDuplicate([23,34,23,45,5,5,6,7,6,6,7,7,7,9,10,10,9,23,])

//! 2  Find the largest and smallest element in an array

// function findSmallestandLargest(arr){

//     let smallest = arr[0]
//     let largest =arr[0]

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > largest){
//             largest = arr[i]
//         }

//       if(arr[i] < smallest ){
//             smallest = arr[i]
//         }
//     }
//     console.log("largest element = ",largest)
//     console.log("smallest element = ",smallest)
// }


// findSmallestandLargest([23,45,67,2,3,45,6,6,7])

//! 3 find second largest element in an array

function findSecondLargest(arr){
    
    let largest = arr[0]
    let secondLargest = null

    if(arr.length < 2){
        return "array length must be greated than 2"
    }

    if(arr.length == 2){
        if(arr[0] > arr[1]){
            secondLargest = arr[1]
        }else{
            secondLargest = arr[0]
        }
    }


    for(let i = 1;i<arr.length ; i++){
        if(arr[i] > largest){
            secondLargest = largest
            largest = arr[i]
        }else if(arr[i] < largest){
            if(secondLargest == null || arr[i] > secondLargest){
                secondLargest = arr[i]
            }
        }
    }
    console.log("second largest element =",secondLargest)
}

findSecondLargest([91,92,67,4,3,5,87,98,100,1000])
// findSecondLargest([91,92])

//! 4 Reverse an array

function reversedArr(arr){

    let reversedArr = []

    for(let i=arr.length-1;i>=0;i--){
        reversedArr[reversedArr.length] = arr[i]
    }

    console.log("reversed array = ",reversedArr)
}

reversedArr([12,34,56,6,7,6,7,8,9,90])

//! check if an array is sorted

function isSorted(arr){
    for(let i=1;i<arr.length;i++){
        if(arr[i]<arr[i-1]){
            return false
        }
    }
    return true
}

console.log(isSorted([1,2,3,4,5,6,7]))
console.log(isSorted([23,45,6,74,6]))

//! 5 find the missing number assuming the number are from 1 to n

function missingNumber(arr,n){
    let total = (n*(n+1))/2
    let sum = 0

    for(let i=0;i<arr.length;i++){
        sum += arr[i]
    }
    return total-sum
}

console.log(missingNumber([1,2,3,4,6],6))
// console.log(missingNumber([1,2,3,4,5,7],7))

//! 6 find the duplicate in an array

function findDuplicate(arr){
    let duplicates = []

    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j<arr.length;j++){
                if(arr[i] == arr[j]){
                    if(!isthere(duplicates,arr[i]))
                        duplicates.push(arr[i])
                }
        }
    }
    return duplicates
}

function isthere(arr,elem){
    for(let i=0;i<arr.length;i++){
        if(arr[i] == elem){
            return true
        }
    }
    return false
}

console.log("duplicate elem = ",findDuplicate([1,22,22,45,67,78,78,90,9,8,9,8]))

//! check if two array are equal or not

function areArrayEqual(arr1,arr2){

    if(arr1.length !== arr2.length){
        return false
    }

    for(let i=0;i<arr1.length;i++){
        if(arr1[i] !== arr2[i]) return false;
    }
    return true
}

console.log("both arrays are equal? =",areArrayEqual([1,2,3],[1,2,3]))
// console.log("both arrays are equal? =",areArrayEqual([1,2,3],[1,2,3,5]))
// console.log("both arrays are equal? =",areArrayEqual([1,2,3],[1,2,7]))


//! find union and intersection of two arrays
//? input -  arr1[1,2,3] , arr2[2,3,4]
//? output - union = [1,2,3,4] 
//?          intersection = [2,3]

function findUnionAndIntersecion(arr1,arr2){
    let union = []
    let intersection = []
}



//! 7 rotate an array by k position
//? example input = array [1,2,3,4,5]  and k = 2

//? output = [4,5,1,2,3]

function rotateArr(arr, k){
    let n= arr.length
    console.log(n)
    k = k % n
    console.log(k)
}

// rotateArr([1,2,3,4,5],2)