const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const showcaseMenu = document.querySelector('#showcase-page');
  const leagueInfoMenu = document.querySelector('#league-info-page');
  const githubMenu = document.querySelector('#github-page');
  let scrollPos = window.scrollY;
  console.log(scrollPos);

// adds 'highlight' class to my menu items
if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add('highlight');
    showcaseMenu.classList.remove('highlight');
    leagueInfoMenu.classList.remove('highlight');
    githubMenu.classList.remove('highlight');
    return;

  }  else if (window.innerWidth > 960 && scrollPos < 1500) {
    showcaseMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    leagueInfoMenu.classList.remove('highlight');
    return;

  } else if (window.innerWidth > 960 && scrollPos < 2100) {
    leagueInfoMenu.classList.add('highlight');
    showcaseMenu.classList.remove('highlight');
    githubMenu.classList.remove('highlight');
    return;

  } else if (window.innerWidth > 960 && scrollPos < 3350) {
    githubMenu.classList.add('highlight');
    leagueInfoMenu.classList.remove('highlight');
    return;
  }

  if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

// Close mobile menu when clicking on a menu item
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active')
    if(window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    }
}

menuLinks.addEventListener('click', hideMobileMenu)
navLogo.addEventListener('click', hideMobileMenu)