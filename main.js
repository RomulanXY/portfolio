const showMenu = (toggleId, navId) => {
  const toggle = document.querySelector(toggleId),
  nav = document.querySelector(navId);
  console.log(toggle, nav);

  if (toggle && nav){
    toggle.addEventListener('click', ()=>{
      nav.classList.toggle('show-menu')
    })
  }
}
showMenu('.nav-toggle', '.nav-menu');


//To remove nav menu at the click of a menu item

const navLink = document.querySelectorAll('.nav-link');

function linkAction() {
  const navMenu = document.querySelector('.nav-menu');
  navMenu.classList.remove('show-menu');
}
navLink.forEach(link => link.addEventListener('click', linkAction));


//scroll sections active link

const sections = document.querySelectorAll('section[id]');
function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight, sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id');
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('.active-link')
    }else{
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('.active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)