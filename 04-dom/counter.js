const count = document.querySelector('#count');
const add = document.querySelector('#add');
const minus = document.querySelector('#minus');
const reset = document.querySelector('#reset');

let c = 0;

add.addEventListener('click', () => {
  c++;
  count.textContent = c;
})
minus.addEventListener('click', () => {
  if(c >= 1){
    c--;
  }
  count.textContent = c;
})
reset.addEventListener('click', () => {
  c = 0;
  count.textContent = c;
})
