var data="Welcome - To ECMA";
// find the length of string
let length = data.length;
console.log(length)
// find the index of ec
let result = data.indexOf("E");
console.log(result)
// replace the welcome with swagatham
let result1 = data.replace("Welcome", "swagatham");
console.log(result1)
console.log(data.indexOf("E"))
// for split the string
console.log(data.split("-"));

var arr=[12,5,34,50,70,90]
// using foreach find item
// arr.forEach(function(item,index,arr1){
//     arr[index]= item<50;
// });
// console.log(arr)
// orginal array is modified
let arr2 = arr.filter(function(num) {
    return num < 50;
});

console.log(arr2)