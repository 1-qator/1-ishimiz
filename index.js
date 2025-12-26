//1-misol
function positiveEvenSquareSum(arr) {
  return arr
    .map(n => (n > 0 ? n : 0))        
    .filter(n => n % 2 === 0)         
    .map(n => n ** 2)                 
    .reduce((a, b) => a + b, 0);      
}
console.log(positiveEvenSquareSum([-3, 2, 4, -5, 6])); 

//2-misol
function checkTwoArr(arr1, arr2) {
  const count = arr => {
    const obj = {};
    for (let n of arr) obj[n] = (obj[n] || 0) + 1;
    return obj;
  };

  const c1 = count(arr1);
  const c2 = count(arr2);

  for (let key in c1) {
    if (c1[key] !== c2[key]) return false;
  }
  return true;
}

//3-misol
function sortArray(arr1, arr2, str) {
  const merged = [...arr1, ...arr2];

  return [
    merged.slice().sort((a, b) => a - b),
    merged.slice().sort((a, b) => b - a),
    merged.map(() => str)
  ];
}

console.log(sortArray([1, 10], [2, 3, 4], "nodejs"));


//4-misol
function numberSplit(n) {
  const a = Math.floor(n / 2);
  const b = Math.ceil(n / 2);
  return [a, b];
}

//5-misol
function sortByLength(arr) {
  return arr.sort((a, b) => a.length - b.length);
}


//6-misol
function evenSortDouble(arr) {
  return arr
    .filter(n => n % 2 === 0)
    .sort((a, b) => a - b)
    .map(n => n * 2);
}


//7-misol
function reverseImage(matrix) {
  return matrix
    .slice()
    .reverse()
    .map(row => row.slice().reverse());
}



//8-misol
function changeNumberToString(a, b) {
  const words = ["one", "two", "three", "four", "five"];
  const result = words.slice(a - 1, b);

  return [
    result,
    result.slice().sort().reverse()
  ];
}


//9-misol
function addToArray(n) {
  const arr = Array.from({ length: n }, (_, i) => i + 1);
  const chunked = [];

  for (let i = 0; i < arr.length; i += 3) {
    chunked.push(arr.slice(i, i + 3));
  }

  return [arr, chunked];
}

