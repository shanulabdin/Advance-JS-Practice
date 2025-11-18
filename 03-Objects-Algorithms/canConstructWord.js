function canConstructWord(letters, word){
  if(letters.length < word.length) return false;

  const ltrs = letters.split('').sort().join('');
  const wrds = word.split('').sort().join('');
  if(ltrs.includes(wrds)){
    return true;
  }
  
  console.log(ltrs, wrds);
}

console.log(canConstructWord("listen", "silent")); 
// true (same letters, enough counts)
console.log(canConstructWord("aabbc", "abc"));      
// true  (you have extra letters, that's fine)
console.log(canConstructWord("abc", "aabb"));       
// false (not enough 'a' and 'b')
console.log(canConstructWord("hello", "helloo"));   
// false (missing one 'o')
console.log(canConstructWord("aaab", "baa"));       
// true
console.log(canConstructWord("xyz", "xyzz"));       
// false