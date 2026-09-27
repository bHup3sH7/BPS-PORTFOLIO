const toggle = document.getElementById('navtoggle');
const links = document.getElementById('navlinks');
const setMenu = open => {
  links.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', String(open));
};
toggle.addEventListener('click', () => setMenu(!links.classList.contains('open')));
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('click', e => {
  if (links.classList.contains('open') && !links.contains(e.target) && !toggle.contains(e.target)) setMenu(false);
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
window.addEventListener('resize', () => { if (window.innerWidth > 720) setMenu(false); });

const form = document.getElementById('contactForm');
form.addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('formNote').textContent = 'Thanks — this is a demo form, so nothing was actually sent yet.';
});

function sendMail() {
  let parms ={
    name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    subject : document.getElementById("subject").value,
    message : document.getElementById("message").value,
  }
  emailjs.send("service_jni0uiu","template_t4saloq",parms).then(alert("Email Sent!!"))
}

try {
  const items = document.querySelectorAll('[data-reveal]');
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { threshold: .15 });
  items.forEach(i => io.observe(i));
} catch (e) { document.querySelectorAll('[data-reveal]').forEach(i => i.classList.add('in')); }