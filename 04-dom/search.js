const inputElement = document.getElementById('input');
const listItems = document.querySelectorAll('.listItem');

inputElement.addEventListener('input', (event) => {
  const searchText = event.target.value.trim().toLowerCase();

  listItems.forEach((listItem) => {
    const itemText = listItem.textContent.toLowerCase();
    const isMatch = itemText.includes(searchText);

    listItem.hidden = isMatch ? false : true;
  })
})