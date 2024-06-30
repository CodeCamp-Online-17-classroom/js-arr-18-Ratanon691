let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};
let sum1 = Object.keys(salaries).reduce((acc, key) => acc + salaries[key], 0)
let sum2 = Object.value(salaries).reduce((acc, value) => acc + value, 0)
let sum3 = Object.entries(salaries).reduce((acc, [key, value]) => acc + value, 0)
console.log(sum1) 
console.log(sum2) 
console.log(sum3) 
