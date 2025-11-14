function max(a, b){
  if(a > b){
    return a;
  } else {
    return b;
  }
}

console.log(max(9, 6));

function isEven(n){
  if (n % 2 === 0){
    return true;
  } else {
    return false;
  }
}

console.log(isEven(3));

function fizzBuzz(n){
  if(n % 3 === 0 && n % 5 === 0){
    return 'FizzBuzz';
  } else if (n % 3 === 0){
    return 'Fizz';
  } else if (n % 5 === 0){
    return 'Buzz';
  }
}

console.log(fizzBuzz(15));