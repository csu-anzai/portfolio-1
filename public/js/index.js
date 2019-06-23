$(function() {
  $('#form-pop').popover()
})

$(function() {
  $('.menu li').click(function() {
    $(this)
      .addClass('active')
      .siblings()
      .removeClass('active')
  })
})
