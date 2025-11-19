const inputElement = document.getElementById('input');
const listContainer = document.getElementById('listContainer');
const listItems = document.querySelectorAll('.listItem');

inputElement.addEventListener('input', (event) => {
  listItems.forEach((listItem) => {
    if(!listItem.textContent.toLowerCase().includes(event.target.value.toLowerCase())){
      listItem.style.display = 'none';
    } else {
      listItem.style.display = 'block';
    };
  })
})