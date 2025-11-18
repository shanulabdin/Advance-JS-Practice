function canConstructWord(letters, word){
  if(letters.length < word.length) return false;

  let freq = {};

  for(let char of letters){
    if(!freq[char]){
      freq[char] = 1;
    } else {
      freq[char]++;
    }
  }

  for(let char of word){
    if(!freq[char])return false;
    freq[char]--;
  }
  return true;
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