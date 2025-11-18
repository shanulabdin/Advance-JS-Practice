function isAnagram(word1, word2){
  if(word1.length !== word2.length) return false;

  let freq = {};

  for(let char of word1){
    freq[char] = freq[char] === undefined ? 1 : freq[char] + 1;
  }
  
  for(let char of word2){
    if(!freq[char]) return false;
    freq[char]--;
  }
  return true;
}

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("car", "rat"));  
console.log(isAnagram("aabb", "bbaa")); 
console.log(isAnagram("hello", "helloo")); 

function isAgm(a, b){
  return a.split('').sort().join('') === b.split('').sort().join('');
}
console.log(isAgm("listen", "silent"));
console.log(isAgm("car", "rat"));  
console.log(isAgm("aabb", "bbaa")); 
console.log(isAgm("hello", "helloo")); 