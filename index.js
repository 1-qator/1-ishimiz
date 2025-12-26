HEAD
console.log("guruh");

// 2-masala

// function checkTwoArr(arr1, arr2) {
//     let found = false
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr1[i] === arr2[j]) {
//                 found = true
//                 break
//             }
//         }
//         if (found) break;
//     }
//     if (found) {
//         return false
//     }else{
//         return true
//     }

// }
// console.log(checkTwoArr([1, 2, 3, 4], [0, 6]));


// 3-masala

// function sortArray(arr1, arr2, str) {
//     for (let i = 0; i < arr2.length; i++) {
//         arr1.push(arr2[i])
//     }
//     let newArr = [...arr1]
//     let KichikKatta = arr1.sort((a, b) => a - b)
//     let KattaKichik = newArr.sort((f, g) => g - f)
//     return KichikKatta 
// }
// console.log(sortArray([1, 10], [2, 3, 4], "node.js"));




// 4-masala

// function numberSplit(numb) {
//     let result 
//     let final = []
//     if (numb % 2 == 0) {
//         result = numb / 2
//         final.push(result)
//         final.push(result)
//     }else{
//         result = numb / 2
//         final.push(Math.floor(result))
//         final.push(Math.floor(result + 1))
//     }

//     return final

// }
// console.log(numberSplit(-1));




// 5-masala

// function sortByLength(arr) {
//     arr.sort()
//     return arr
// }
// console.log(sortByLength(["a" , "ccc", "dddd", "bb"]));





// 6. Arraydagi juft sonlarni o'sish tartibida tartiblash va har bir elementni ikki barobar oshirish

// function juftConversion(arr) {
//     let juftlar = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             juftlar.push(arr[i])
//         }
//     }


//     let n = juftlar.length
//     for (let j = 0; j < n; j++) {
//         for (let m = 0; m < n - 1; m++) {
//             if (juftlar[m] > juftlar[m + 1]) {
//                 let temp = juftlar[m]
//                 juftlar[m] = juftlar[m + 1]
//                 juftlar[m + 1] = temp
//             }
//         }
//     }
    
//     let result = []
//     for (let c = 0; c < juftlar.length; c++) {
//         result.push(juftlar[c] * 2)
        
//     }
//     return result

// }
// console.log(juftConversion([8, 2, 12, 10]));



// 7-masala

// function reverseImage(arr) {
//     let sorting = []
//     for (let i = arr.length - 1; i >= 0; i--) {
//         sorting.push(arr[i])
//     }
    

//     let result = []
//     let finalResult = []
//     for (let j = 0; j < sorting.length; j++) {
//         let birlik = sorting[j]
//         for (let m = birlik.length - 1; m >= 0; m--) {
//             result.push(birlik[m])
            
//         }
//         finalResult.push(result)
//         result = []
        
//     }
//     return finalResult
    
// }

 
// console.log(reverseImage([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));


// 8-masala

// function changeNumberToString(start, end) {
//     let result = []
    
    
//     let numbersAsString = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"]
    
//     for (let i = start; i <= end; i++) {
        
//         result.push(numbersAsString[i - 1])
//     }
    
//     return result
// }

// console.log(changeNumberToString(1, 5))

// 9-masala

// function addToArray(n) {
//     let arr = []
    
//     for (let i = 1; i <= n; i++) {
//         arr.push(i)
//     }
    
   
//     let chunked = []
//     let temp = []
    
//     for (let i = 0; i < arr.length; i++) {
//         temp.push(arr[i])
       
//         if (temp.length === 3) {
//             chunked.push(temp)
//             temp = []  
//         }
//     }
    
   
//     if (temp.length > 0) {
//         chunked.push(temp)
//     }
    
//     return chunked
// }

// console.log(addToArray(10))



 
