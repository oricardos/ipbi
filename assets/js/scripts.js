var menu = document.querySelector('header .menu');
var navMenu = document.querySelector('header nav');
var listMenu = document.querySelectorAll('nav a');
var menuMobile = document.querySelector('.iconMenu');
var menuMobileIcon = document.querySelectorAll('.iconMenu .menuIcon');

window.onscroll = function(){
    var top = window.pageYOffset || document.documentElement.scrollTop;
    if( top > 400 ) {
        menu.classList.add('menuScroll', 'transition','w-100', 'shadow');

        navMenu.classList.add('w-100');

        for(links of listMenu){
            links.classList.add('scrollColor');
        }

        for(icon of menuMobileIcon){
            icon.classList.add('menuIconScroll');
        }
        

    } else {
        menu.classList.remove('menuScroll', 'scrollColor', 'transition','w-100', 'shadow');
        navMenu.classList.remove('w-100');
        for(links of listMenu){
            links.classList.remove('scrollColor');
        } 

        for(icon of menuMobileIcon){
            icon.classList.remove('menuIconScroll');
        }
    }
}

function menuOpen() {
    var menu = document.querySelector('ul');

    if(menu.style.display === 'none') {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }

}
