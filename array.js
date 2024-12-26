//! Reverse an array 

function arrRev(arr){
    revArr = []
    for(let i = arr.length-1;i>=0;i--){
        revArr[revArr.length] = arr[i]
    }
    return revArr
}

// console.log("reversed array = ", arrRev([1,2,3,4]))

//! find min and max elements in an array

function minAndMax(arr){
    let min = arr[0]
    let max = arr[0]

    for(let i=0;i<arr.length;i++){
        if(min > arr[i]){
            min = arr[i]
        }

        if(max < arr[i]){
            max = arr[i]
        }
    }

    return `max = ${max} and min = ${min}`
}

// console.log(minAndMax([34,2,56,78,1,5,56,]))

//! Remove duplicates of an array

function removeDuplicates(arr){
    let newarr = []

    for(let i=0;i<arr.length;i++){
        let isDuplicate = false

        for(let j= 0;j<newarr.length;j++){
            if(arr[i] === newarr[j]){
                isDuplicate = true
                break;
            }
        }
        if(!isDuplicate){
            newarr[newarr.length] = arr[i]
        }
    }
    return `unique elements in the array = ${newarr}`
}

// console.log(removeDuplicates([2,2,3,4,5,6,456,56,4,3,56,7,8,7,87,]))

//! find duplicates in an array

function findDplicates(arr){
    let duplicates = []

    for(let i = 0 ; i<arr.length;i++){
        for(let j= i+1;j<arr.length;j++){
            if(arr[i] === arr[j]){
                if(!isthere(duplicates,arr[i])){
                    duplicates[duplicates.length] = arr[i]
                }
            }
        }
    }
    return `duplicate elements = ${duplicates}`
}

function isthere(arr,elem){
    for(let i = 0;i<arr.length;i++){
        if(arr[i] === elem){
            return true
        }
    }

    return false
}

// console.log(findDplicates([1,2,2,3,3,4,5,6,7,8,7,6,4,5,9]))
// console.log(findDplicates([2,2,3,3,4,4,5,5,7,8,9,7,8]))

//! find frequency of each element in an array

function freqEach(arr){
    let frequency = {}

    for(let i=0;i<arr.length;i++){
        let elem = arr[i]

        // console.log("elem =",elem)
        // console.log("freqElem",frequency)
    
        if(frequency[elem] === undefined){
            frequency[elem] = 1
        }else{
            frequency[elem]++
        }
    }
    return frequency
}

// console.log(freqEach([1,2,3,4,5,5,5,3,3,3,6,6,67,7,7,7,7,]))


// let elem = "apple"
// let freq = {}

// // freq.elem = 2

// // console.log(freq)

// freq[elem] = 3

// console.log(freq)

//! Merge two sorted arrays

function mergeArrays(arr1,arr2){
    let mergedArr = []
    let i = 0
    let j = 0

    while(i <arr1.length && j<arr2.length){
        if(arr1[i] < arr2[j]){
            mergedArr[mergedArr.length] = arr1[i]
            i++
        }else{
            mergedArr[mergedArr.length] = arr2[j]
            j++
        }
    }

    while(i < arr1.length){
        mergedArr[mergedArr.length] = arr1[i]
        i++
    }

    while(j < arr2.length){
        mergedArr[mergedArr.length] = arr2[j]
        j++
    }

    return `merged array = ${mergedArr}`
}

// console.log(mergeArrays([1,3,4,5],[1,2,3,4,7,8]))
// console.log(mergeArrays([56,45,3,4,5,9],[4,6,7,84,56]))

//! merging ant two arrays

function mergeArr(arr1,arr2){
    let mergeArr = []

    let i = 0
    let j = 0
    while(i <arr1.length || j<arr2.length){
        mergeArr[mergeArr.length] = arr1[i]
        mergeArr[mergeArr.length] = arr2[j]
        i++
        j++
    }

    return mergeArr
}

// console.log(mergeArr([2,3,4,5],[3,4,5,6]))

//! find the first and last occurance of an element

function occurance(arr,elem){
    let first = -1
    let last = -1

    for(let i = 0;i<arr.length;i++){
        if(arr[i] === elem){
            first = i
            break;
        }
    }
    for(let i=arr.length-1; i>=0;i--){
        if(arr[i] === elem){
            last = i
            break
        }
    }

    return `elem = ${elem} -- first occur = ${first} and last occur = ${last}`
}

// console.log(occurance([3,2,4,5,2,4,52,2],2))

//! check if an array is sorted 

function isSorted(arr){
    for(let i = 0;i<arr.length -1;i++){
        if(arr[i] > arr[i+1]){
            return false
        }
    }
    return true
}

// console.log(isSorted([23,2,3,4]))
// console.log(isSorted([1,2,3,4,5]))

//! move all the zeros to the end of the array

function moveZeros(arr){
    let count = 0
    let newarr = []
    for(let i = 0;i<arr.length;i++){
        if(arr[i] !== 0){
            newarr[newarr.length] = arr[i]
        }else {
            count++
        }
    }
    for(let i = 0;i<count;i++){
        newarr[newarr.length] = 0
    }
    return newarr
}

// console.log(moveZeros([0,2,3,0,5,0,4,0,5]))

//! rearrange array to Place Negatives Before Positives

function rearrange(arr){
    let newarr = []
    for(let i =0;i<arr.length;i++){
        if(arr[i] < 0){
            newarr[newarr.length] = arr[i]
        }
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i] >= 0){
            newarr[newarr.length] = arr[i]
        }
    }
    return newarr
}

// console.log(rearrange([3,4,2,-1,0,6,7,4,-7,9,-3]))

//! transpose a matrix

function transposed(matrix){
    let rows = matrix.length
    let cols = matrix[0].length
    let transposed = []

    console.log(rows)
    console.log(cols)

    for(let i = 0;i<cols ;i++){
        transposed[i] =[]
        // console.log(transposed)
        for(let j=0;j<rows;j++){
            transposed[i][j]= matrix[j][i]
        }
    }
    return transposed
}

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

// transposed(matrix)

// console.log(transposed(matrix))

//! find the missing number in a sequence 

function missingNum(arr,n){
    let total = (n*(n+1))/2 
    let sum = 0

    for(let i=0;i<arr.length;i++){
        sum += arr[i]
    }

    return total - sum
}

// console.log(missingNum([1,2,3,5,6],6))

//! bubble sort

function bubbleSort(arr){
    let swapped
    let n = arr.length

    do{
        swapped = false

        for(let i = 0;i<n-1;i++){
            if(arr[i]>arr[i+1]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swapped = true 
            }
        }
    }while(swapped)

        return arr
}

// console.log(bubbleSort([34,5,63,45,6,57,8]))

//! anagram 
//? input1 = silent , input2 = listen in both str if freq of char are same then they are angram

function sort(arr){
    let swapped 
    let n = arr.length

    do{
        swapped = false
        for(let i=0;i<n-1;i++){
            if(arr[i]>arr[i+1]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swapped = true
            }
        }
    }while(swapped)

        return arr
}

function strToArr(str){
    let arr = []
    for(let i = 0;i<str.length;i++){
        arr[arr.length] = str[i]
    }
    return arr
}
// console.log(strToArr("silent"))

function anagram(str1,str2){
    if(str1.length !== str2.length){
        return false
    }

    let arr1 = strToArr(str1)
    let arr2 = strToArr(str2)

    console.log(arr1)

    let sort1 = sort(arr1)
    let sort2 = sort(arr2)

    console.log(sort1)
    console.log(sort2)

    for(let i=0;i<arr1.length;i++){
        if(sort1[i] !== sort2[i]){
            return false
        }
    }
    return true
}

// console.log(anagram("silent","listen"))

//! fibonacci

function fibonaci(n){
    let fib = [0,1]

    for(let i=2;i<n;i++){
        fib[i] = fib[i-1] + fib[i-2]
    }
    return fib
}

// console.log(fibonaci(10))

//! Palindrome

function palindrome(str){
    let left = 0
    let right = str.length-1

    while(left < right){
        if(str[left] !== str[right]){
            return false
        }
        left++
        right--
    }
    return true
}

// console.log(palindrome("madam"))

//! rotate array with kth position

function kthRotate(arr,k){
    let newarr = []
    for(let i=k;i<arr.length;i++){
        newarr[newarr.length] = arr[i]
    }
    for(let i=0;i<k;i++){
        newarr[newarr.length] = arr[i]
    }

    return newarr
}

// console.log(kthRotate([1,2,3,4,5],3))


//! move all zeros to end of the array 

function moveZeros(arr){
    let count = 0
    let newarr =[]
    for(let i=0;i<arr.length;i++){
        if(arr[i] !== 0){
            newarr[newarr.length] = arr[i]
        }else{
            count++
        }
    }
    for(let i=0;i<=count-1;i++){
        newarr[newarr.length] = 0
    }
    return newarr
}

// console.log(moveZeros([1,0,567,80,0,0,0,8,9]))

function moveZero(arr){
    let count = 0
    let newarr =[]
    for(let i=0;i<arr.length;i++){
        if(arr[i] !== 0){
            newarr[newarr.length] != arr[i]
        }else{
            count++
        }
    }
    for(let i=0;i<=count-1;i++){
        newarr[newarr.length] = 0
    }
    return newarr
}

// console.log(moveZero([1,0,567,80,0,0,0,8,9]))

//! write a program to print month based on month number

function month(n){
    let months = ["jan","feb","mar","april","may","june","july","aug","sept","oct","nov","dec"]

    if(n <= months.length){
        return months[n-1]
    } 
}

// console.log(month(9))

//! reverse a number

function rev(n){

    let rev = 0;
    while(n>0){
        let rem = n % 10;
        console.log("rem",rem)
        rev =  rev * 10 + rem
        console.log("rev",rev)
        n = Math.floor(n/10)
        console.log("n",n)
    }

    return rev
}

// console.log(rev(12345))

//! convert array to string

function arrtoStr(arr){
    let str = ""
    for(let i=0;i<arr.length;i++){
        str += arr[i]
    }
    return str
}

// console.log(arrtoStr([1,2,3,4,5,6]))

//! convert string to arr

function strtoArr(str){
    let arr = []

    for(let i =0;i<str.length;i++){
        arr[arr.length] = str[i]
    }

    return arr
}

let str = arrtoStr([1,2,3,4,5,6])
// console.log(strToArr(str))

//! convert number to array

function numToarr(num){
    
    let isNegative = false

    if(num <0){
        num = -num
        isNegative = true
    }

    let temp = num
    let length = 0
    while(temp > 0){
        length++
        temp = Math.floor(temp/10)
    }

    const arr = new Array(length)
    let index = length 
    while(num > 0){
        let n = num % 10
        arr[length - 1] = n
        length--
        num = Math.floor(num/10)
    }

    if(index === 0 ){
        return [0]
    }

    if(isNegative){
        arr[0] = -arr[0]
    }

    return arr
}

// console.log(numToarr(12345))


//! Matrix 

function matrixx(){
    let matrix = []
    for(let i=0;i<3;i++){
        matrix.push([])
        for(let j=0;j<8;j++){
            matrix[i][j]
        }
    }
    console.log(matrix)
}

// matrixx()

function m(){
    let rows = 3
    let cols = 3

    let twoDArr = []

    for(let i=0;i<rows;i++){
        let row = []
        for(let j=0;j<cols;j++){
            row.push(i * cols + j + 1)
        }
        twoDArr.push(row)
    }
    return twoDArr
}

// console.log(m())


function m1(arr,cols){

    let result = []
    let temp = []

    for(let i=0;i<arr.length;i++){
        temp.push(arr[i])

        if(temp.length === cols){
            result.push(temp)
            temp = []
        }
    }
    
    if(temp.length > 0){
        while(temp.length < cols){
            temp.push(null)
        }
        result.push(temp)
    }
    return result
}

let arr = [2,3,5,6,7,8,9,56,7,7,8,9,10]

// console.log(m1(arr,3))

//! rotate an array 

function rotate(arr){
    let m = Math.floor(arr.length/2)
    console.log(m)
    let newArr = []
    for(let i=m ;i<arr.length;i++){
        newArr[newArr.length] = arr[i]
    }

    for(let j=0;j<m;j++){
        newArr[newArr.length] = arr[j]
    }

    return newArr
}

console.log(rotate([0,1,2,3,4,5,6]))