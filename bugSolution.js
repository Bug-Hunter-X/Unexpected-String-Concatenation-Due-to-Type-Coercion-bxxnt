function foo(a, b) {
  // Explicit type checking using typeof operator
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; // Numerical addition
  } else {
    return 'Invalid input'; // Handles non-number inputs
  }
}

console.log(foo(1, 1)); // Output: 2
console.log(foo(1, '1')); // Output: Invalid input

// Alternative solution using Number() for explicit conversion
function foo2(a,b){
    return Number(a) + Number(b);
}
console.log(foo2(1,'1')); //Output: 2
console.log(foo2('1','1')) //Output: 2
console.log(foo2(1, 'abc')) //Output: NaN