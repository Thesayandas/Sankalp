
function toggleMob() {
  const mobMenu = document.getElementById('mobMenu');
  if (mobMenu) mobMenu.classList.toggle('mob-open');
}

function submitForm() {
  const modal = document.getElementById('modal');
  if (modal) modal.classList.add('show');
}

function closeModal() {
  const modal = document.getElementById('modal');
  if (modal) {
    modal.classList.remove('show');
    modal.style.display = '';
  }
}

function showPopup() {
  const popup = document.getElementById('popupModal');
  if (popup) popup.classList.add('show');
}

function closePopup() {
  const popup = document.getElementById('popupModal');
  if (popup) popup.classList.remove('show');
}

window.addEventListener('load', () => {
  // Small timeout to ensure smooth transition on initial load
  setTimeout(showPopup, 300);
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closePopup();
    closeModal();
  }
});