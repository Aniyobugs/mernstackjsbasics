function add(a, b) {
  let c = a + b;
//   console.log(`The sum is = ${c}`);
return c
}
var result = add(1,2);
console.log(result);


let sum = (a, b) => {
    console.log(a+b);
}
sum(2,3);

let fullname = (a,b) =>{
    console.log(a+b)
}
fullname("Anandhu","Krishna")

let fullname1 = (fname,lname) =>{
    console.log(`${fname} ${lname}`)
};
fullname1('Anandhu','krishna');


let exammark = 100;
if (exammark>=35) {
    console.log("PASSED")
    
} else {
    console.log("Failed")
    
}


