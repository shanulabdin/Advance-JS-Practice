const c = document.querySelector('#count');

let x = 0;

add.onclick = () => (c.textContent = ++x);
minus.onclick = () => (x > 0 && (c.textContent = --x));
reset.onclick = () => (c.textContent = x = 0);