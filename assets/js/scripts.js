var menu = document.querySelector('header .menu');
var navMenu = document.querySelector('header nav');
var listMenu = document.querySelectorAll('nav a');

window.onscroll = function(){
    var top = window.pageYOffset || document.documentElement.scrollTop;
    if( top > 400 ) {
        menu.classList.add('menuScroll', 'transition','w-100', 'shadow');
        navMenu.classList.add('w-100');
        for(links of listMenu){
            links.classList.add('scrollColor');
        }        

    } else {
        menu.classList.remove('menuScroll', 'scrollColor', 'transition','w-100', 'shadow');
        navMenu.classList.remove('w-100');
        for(links of listMenu){
            links.classList.remove('scrollColor');
        } 
    }
}
