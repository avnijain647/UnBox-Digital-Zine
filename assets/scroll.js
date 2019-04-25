
$(document).on('scroll', function(){

var windowWidth = $(window).width()
var pixels = $(document).scrollTop()
console.log('scrolling', document)
if(windowWidth<600){
  $('.scroll_all').css('left', -2 * pixels)
  // $('.scroll_all').css('background-color', 'black')
  , true}
// $('.scroll_all').css('background-color', 'black')
console.log(windowWidth)


  })


$(document).ready(()=> {

var windowWidth = $(window).width()
if(windowWidth<600){
// $('.scroll_all').css('background-color', 'red')
  $(document).hide('.zoom-in')
  	$(".click_layer").css({"height":100 + 'vh', "width":2340 + "vw"})
  $(document).hide('.zoom-in')
  	$("#overview").css({"height":100 + 'vh', "width":2340 + "vw"})
    $(document).hide('.zoom-out')
    $(document).hide('.zoom-in')
  , true}

console.log(windowWidth)
})
