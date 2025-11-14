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


function countVowels(str){
  const string = str.toLowerCase();
  const vowels = 'aeiou';
  let count = 0;

  for(let i = 0; i < string.length; i++){
    if(vowels.includes(string[i])){
      count++;
    }
  }
  return count;
}
console.log(countVowels('HELLO, my name is Shan.'));


function reverseString(str){
  let reversed = '';

  for(let i = str.length - 1; i >= 0; i--){
    reversed += str[i];
  }
  return reversed;
}
console.log(reverseString('Hello'));