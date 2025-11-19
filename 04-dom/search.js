const inputElement = document.getElementById('input');
const listItems = document.querySelectorAll('.listItem');

let timeoutId;
inputElement.addEventListener('input', (event) => {
  clearTimeout(timeoutId);

  timeoutId = setTimeout(() => {
    const searchText = event.target.value.trim().toLowerCase();
    
    listItems.forEach((listItem) => {
      const itemText = listItem.textContent.toLowerCase();
      const isMatch = itemText.includes(searchText);
      
      listItem.hidden = isMatch ? false : true;
    });
  }, 200);
});