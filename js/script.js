var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

const button = document.getElementById('myButton');
const tooltip = document.getElementById('tooltip');
button.addEventListener('click', () => {
    alert('Mariamahmed-code.github.io says!\n تم نسخ النص');  
});