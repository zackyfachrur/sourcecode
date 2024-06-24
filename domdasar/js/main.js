const showAlert = document.getElementById('showAlert');
const alertContent = document.getElementById('alertContent');

showAlert.addEventListener('click', () => {
   alertContent.classList.toggle('d-none')
})