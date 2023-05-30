$('.burger,.overlay').on('click', function (e) {
  e.preventDefault()
  $('.header__list').toggleClass('header__list--open')
  $('.overlay').toggleClass('overlay--show')
  $('.burger').toggleClass('active')
  $('body').toggleClass('scroll')
})