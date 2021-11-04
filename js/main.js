$(document).ready(function () {
  $('.header__burger').on('click', function () {
    $('.header__nav').toggleClass('header__nav-active');
    $('.header__burger').toggleClass('header__burger-active');
    $('.header__black-left').toggleClass('header__black-left-active');

    // Плавное появление ссылок в nav
    $('.header__home').toggleClass('header__home1');
    $('.header__about').toggleClass('header__about1');
    $('.header__services').toggleClass('header__services1');
    $('.header__portfolio').toggleClass('header__portfolio1');
    $('.header__blog').toggleClass('header__blog1');
    $('.header__contact').toggleClass('header__contact1');
  });

  $('.header__black-left').on('click', function () {
    $('.header__black-left-active').removeClass('header__black-left-active');
    $('.header__nav-active').removeClass('header__nav-active');
    $('.header__burger-active').removeClass('header__burger-active');

    // Удаляем классы у ссылок в nav
    $('.header__home').removeClass('header__home1');
    $('.header__about').removeClass('header__about1');
    $('.header__services').removeClass('header__services1');
    $('.header__portfolio').removeClass('header__portfolio1');
    $('.header__blog').removeClass('header__blog1');
    $('.header__contact').removeClass('header__contact1');
  });
  

  //according
  var acc = document.getElementsByClassName("faq__accordion-btn");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("faq__accordion-active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
});

