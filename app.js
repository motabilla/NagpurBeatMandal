const menu = document.querySelector('#mobile_menu');
const menuLinks = document.querySelector('.navbar_menu');
const navLogo = document.querySelector('#navbar_logo');

// display mobile menu

const mobileMenu =()=>{
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

const highLightMenu = ()=>{
  const element = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home');
  const aboutMenu = document.querySelector('#about_page');
  const serviceMenu = document.querySelector('#services_page');

  var scrollPos = window.scrollY;

 console.log(scollPos);

 if(window.innerWidth > 960 && scrollPos < 600){
   homeMenu.classList.add('highlight');
   aboutMenu.classList.remove('highlight');
   return;
 } else if(window.innerWidth > 960 && scrollPos < 1400){
   homeMenu.classList.add('highlight');
   aboutMenu.classList.remove('highlight');
   serviceMenu.classList.remove('highlight');
   return;
 }else if(window.innerWidth > 960 && scrollPos < 1400){
  serviceMenu.classList.add('highlight');
   aboutMenu.classList.remove('highlight');
   return;
 };

if((element && window.innerWidth < 960 && scrollPos<600) || element){
  element.classList.remove('highLight');
};

};

window.addEventListener('scroll', highLightMenu);
window.addEventListener('click',highLightMenu);

//Close mobileMenu

const hideMobileMenu = () =>{
  const menuBars = document.querySelector('.is-active');
  if(window.innerWidth <= 768 && menuBars){
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);
