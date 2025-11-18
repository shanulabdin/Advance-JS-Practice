// 1
function charFrequency(str){
  let freq = {};
  for(let i = 0; i < str.length; i++){
    if(freq[str[i]] === undefined){
      freq[str[i]] = 1;
    } else {
      freq[str[i]] += 1;
    }
  }
  return freq;
}
console.log(charFrequency('banana'));
