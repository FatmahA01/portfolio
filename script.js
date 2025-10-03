
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id.length > 1 && document.querySelector(id)) {
      e.preventDefault();
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
  });
});


const emailText = document.getElementById("emailText");
const showBtn = document.getElementById("showEmail");
if (emailText && showBtn) {
  showBtn.addEventListener("click", () => {
    const hidden = emailText.textContent === "[hidden]";
    emailText.textContent = hidden ? "g00100002@aus.edu" : "[hidden]";
    showBtn.textContent = hidden ? "Hide Email" : "Show Email";
    showBtn.classList.toggle("btn-dark", hidden);
    showBtn.classList.toggle("btn-outline-dark", !hidden);
  });
}




