let focusedCell = null;
const handleCellClick = (cellId) => {
  let cell = document.getElementById(cellId);
  //   if the cell is already focused
  if (cell === focusedCell) {
    let input = document.createElement('input');
    input.type = 'text';
    input.value = cell.innerText;
    // clear cell content
    cell.innerHTML = '';
    cell.appendChild(input);
    // focus the input
    input.focus();
    // add focus class wto highlight the cell
    cell.classList.add('focused');
    // remove focused class when inout loses focus
    input.addEventListener('blur', () => {
      cell.classList.remove('focused');
      saveInput(cell, input.value);
    });
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        cell.classList.remove('focused');
        saveInput(cell, input.value);
      }
    });
  } else {
    // reset the previous cell if any
    if (focusedCell) {
      focusedCell.classList.remove('focused');
    }
    // set this cell as focused
    focusedCell = cell;
    // add focused class to highlight the cell
    cell.classList.add('focused');
  }
};
// function to save the input data
function saveInput(cell, value) {
  // update the cell content with input value
  cell.innerText = value;
}

document
  .getElementById('cell1')
  .addEventListener('click', () => handleCellClick('cell1'));
document
  .getElementById('cell2')
  .addEventListener('click', () => handleCellClick('cell2'));
