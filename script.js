
function toggleMob() {
  document.getElementById('mobMenu').classList.toggle('mob-open');
}
function submitForm() {
  document.getElementById('modal').classList.add('show');
}
function closeModal() {
  document.getElementById('modal').classList.remove('show');
  document.getElementById('modal').style.display = '';
}

function showPopup() {
  document.getElementById('popupModal').classList.add('show');
}

function closePopup() {
  document.getElementById('popupModal').classList.remove('show');
}

window.addEventListener('load', showPopup);