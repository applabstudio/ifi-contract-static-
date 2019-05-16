const dom = {
  siteHeader: '.site-header',
  navToggle: '.js-nav-toggle',
  siteNav: '.js-site-nav',
};

// ANCHOR functions site-header
const toggleNav = (evt) => {
  const nav = document.querySelector(dom.siteNav);

  evt.currentTarget.classList.toggle('close');
  nav.classList.toggle('open');
};

const setScrollClass = (evt) => {
  const siteHeader = document.querySelector(dom.siteHeader);

  if (window.pageYOffset > 200) {
    siteHeader.classList.add('scroll');
  } else {
    siteHeader.classList.remove('scroll');
  }
}

const setSticky = (evt) => {
  window.onscroll = function () {
    myFunction()
  };
  var header = document.getElementById("myHeader");
  var sticky = header.offsetTop;
  
  function myFunction() {
    console.log("scroll and add class sticky in header");
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
}

const events = () => {
  const navToggle = document.querySelector(dom.navToggle);
  navToggle.addEventListener('click', toggleNav);
  window.addEventListener('scroll', setScrollClass);
  window.addEventListener('scroll', setSticky);
};

export default {
  init: () => {
    events();
  },
};