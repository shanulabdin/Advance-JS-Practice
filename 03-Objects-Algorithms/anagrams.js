function isAnagram(word1, word2){
  let obj = {};
  let anagram = null;

  if(word1.length !== word2.length){
    anagram = false;
    return anagram;
  }

  for(let i = 0; i < word1.length; i++){
    obj[word1[i]] = 1;
  }
  for(let i = 0; i < word2.length; i++){
    obj[word2[i]] += 1;
  }
  Object.keys(obj).forEach(key => {
    const value = obj[key];
    value === 2 ? anagram = true : anagram = false
  })
  return anagram;
}

console.log(isAnagram('listen', 'silent'));
console.log(isAnagram('car', 'rat'));

// plan:
// first make an Object --
// each charcter of word1 will be a key with value 1 --
// make the charcters of word2 add into the value --
// check if all the keys have value = 2 ? true : false; --