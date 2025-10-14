import '../scss/style.scss';

document.addEventListener('DOMContentLoaded', function () {
  const sidebar = document.getElementById('sidebar');
  const cancel_button = document.getElementById('cancel-button');
  const hamburger = document.getElementById('ham-burger');
  const body = document.body;

  function toggleSidebar() {
    sidebar.classList.toggle('active');
    body.classList.toggle('sidebar-open');
  }

  cancel_button.onclick = toggleSidebar;

  hamburger.onclick = toggleSidebar;
});
