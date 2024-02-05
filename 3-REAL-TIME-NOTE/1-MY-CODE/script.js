const textareaEl = document.querySelector('#textarea');
const totalCounterEl = document.querySelector('#total-counter');
const remainingCounterEl = document.querySelector('#remainig-counter');

textareaEl.addEventListener('keyup', () => {
  updateCounter();
});
updateCounter();
function updateCounter() {
  totalCounterEl.innerHTML = textareaEl.value.length;
  remainingCounterEl.innerHTML =
    textareaEl.getAttribute('maxLength') - textareaEl.value.length;
}
