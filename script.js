const menu=document.querySelector('.menu');
const navLinks=document.querySelector('.nav-links');
menu.addEventListener('click',()=>navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(link=>link.addEventListener('click',()=>navLinks.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();

document.getElementById('quoteForm').addEventListener('submit',(event)=>{
  event.preventDefault();
  const businessEmail='getitdonesonyardservice@gmail.com';
  const form=new FormData(event.target);
  const subject=encodeURIComponent('New Get It Done Son quote request');
  const body=encodeURIComponent(
    `Name: ${form.get('name')}\n`+
    `Phone/Email: ${form.get('contact')}\n\n`+
    `Job details:\n${form.get('message')}`
  );
  window.location.href=`mailto:${businessEmail}?subject=${subject}&body=${body}`;
});
