let arr = [3,5,4,1,2];
console.log(arr);
console.log(arr.length);
console.log(arr[0]);
console.log(arr.toString()); // used to change the type of array to string.
console.log(arr.join(" and "));
console.log(arr.pop()); // used to pop the last element.
console.log(arr.push(12)); // used to push element in the last.
console.log(arr.push(124)); 
console.log(arr.shift()); // used to pop first element.
console.log(arr.unshift(122)); // used to push element in the first.
console.log(arr);
console.log(arr.length);
let a1 = [2,3,4];
let a2 = [5,1,3];
let a3 = [7,6,9];
console.log(a1.concat(a2,a3)); // used to add two arrays.
for(const itr of arr){
    console.log(itr);
}