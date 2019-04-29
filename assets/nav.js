


    $(document).ready( function scroll_to(init_top, init_left){
      var init_top = $("#overview").offset().top+575;
     var init_left = $("#overview").offset().left+700;
var windowWidth = $(window).width()
      if(windowWidth>600){
        $("#overview").addClass("zoom-out")

      $('html,body').animate({
     scrollTop: init_top,
      scrollLeft:init_left}, 300), true}

    })

    $(document).ready(function() {

    var windowWidth = $(window).width()
    if(windowWidth<600){

      $(document).hide('.zoom-in')
      	$(".scroll_all").css({"height":100 + 'vh', "width":2700 + "vw"})
      $(document).hide('.zoom-in')
      	// $("#overview").css({"height":100 + 'vh', "width":2900 + "vw"})
        $(document).hide('.zoom-out')
        $(document).hide('.zoom-in')
        $('.scroll_all').animate({
       scrollTop: 0,
        scrollLeft:0}, 100), true}





    })

      var window_height = $(window).height();
      var window_width= $(window).width();

      	var image_width = $("#overview").width()
      	var image_height = $("#overview").height()

$('#overview').on('click', function(e){
  var windowWidth = $(window).width()
  var offset_top = event.pageY;
  var offset_left = event.pageX;

  var overview_image_width = $("#overview").width()
  var overview_image_height = $("#overview").height()

   var top = Math.round(((offset_top*image_height)/overview_image_height)-(window_height/2));
  var left = Math.round(((offset_left*image_width)/overview_image_width)-(window_width/2));


            if($('.zoom-out').is(':visible') && windowWidth>600){




            $("#overview").removeClass("zoom-out").addClass("zoom-in")
            $("#overview").css({"height":84 + 'vw', "width":window_width})
              $(".click_layer").css({"height":84 + 'vw', "width":window_width})


          $('html, body').animate({scrollTop:top - offset_top, scrollLeft:0},500);
    console.log(top)

}else if (windowWidth>600){



       var offset_top = event.pageY;
       var offset_left = event.pageX;

       var overview_image_width = $("#overview").width()
       var overview_image_height = $("#overview").height()


       // var top = Math.round(((offset_top*image_height)/2600)-(window_height));
       // var left = Math.round(((offset_left*image_width)/2200)-(window_width));
      //  var top = Math.round(((offset_top*image_height)/overview_image_height)-(window_height/2));
 			// var left = Math.round(((offset_left*image_width)/overview_image_width)-(window_width/2));

$('html, body').animate({scrollTop:offset_top, scrollLeft:offset_left}, 300);
$("#overview").removeClass("zoom-in").addClass("zoom-out")
$("#overview").css({"height":2200, "width":2600})
  // $(".click_layer").css('opacity',0)

$(".click_layer").css({"height":2200 , "width":2600})



}



})
$('.hand2').on('click',function (){

          $(".yellow2").toggleClass('slide')

})
$('.hand3').on('click',function (){
  $(".ball").toggleClass('ball_hide')
    $(".ball_shadow").toggleClass('ball_hide')
          $(".red2").toggleClass('slideup')
          $(".shape5_2").toggleClass('coffee')
            $(".shape5_3").toggleClass('coffee')

})
$('.hand4').on('click',function (){

          $(".blue").toggleClass('slideup')


})
$('.shape_11').on('click',function (){

          $(".link11").addClass('show')


})
// $('.hand4').on('mouseleave',function (){
//
//           $(".blue").css('opacity', 0)
//
//
// })
$('.shape1_1').on('click',function (){

          $(".link3").toggleClass('show')
            $(".link3_1").toggleClass('show')

})
$('.shape_6').on('click',function (){
// $('.link8').css('background-color', 'red')
          $('.link6').addClass('show')

})
$('.shape8').on('click',function (){
// $('.link8').css('background-color', 'red')
          $('.link8').addClass('show')

})
$('.close').on('click',function (){
// $('.link8').css('background-color', 'red')
          $('.link8').removeClass('show')
            $('.link1').removeClass('show')
            $('.link6').removeClass('show')
              $('.link3').removeClass('show')
              $('.link7').removeClass('show')
                $('.link6_2').removeClass('show')
                  $('.link3_1').removeClass('show')
                    $('.link9').removeClass('show')
                      $('.link5').removeClass('show')
                        $(".link11").removeClass('show')
                        $('.link5_1').removeClass('show')
$('.link1_1').removeClass('show')
$('.link4').removeClass('show')
  $('.link6').removeClass('show')
})
$('.shape_2').on('click',function (){
// $('.link8').css('background-color', 'red')
          $('.link1').addClass('show')

})
$('.shape_2_1', ).on('click',function (){
// $('.link8').css('background-color', 'red')
          $('.link1_1').addClass('show')

})
$('.shapewheel', ).on('click',function (){
// $('.link8').css('background-color', 'red')
          $('.link3_1').addClass('show')

})
$('.shape_4', ).on('click',function (){
// $('.link8').css('background-color', 'red')
          $('.link4').addClass('show')

})
$('.ball', ).on('click',function (){
// $('.link8').css('background-color', 'red')
          $('.link5_1').addClass('show')

})
$('.shape5_2').on('click',function (){
// $('.link8').css('background-color', 'red')
          $('.link5').addClass('show')

})
$('.shape_6', ).on('click',function (){
// $('.link8').css('background-color', 'red')
          $('.link6').addClass('show')

})
$('.shape_7').on('click',function (){
// $('.link8').css('background-color', 'red')
          $('.link7').addClass('show')

})
$('.shape_6_2').on('click',function (){
// $('.link8').css('background-color', 'red')
          $('.link6_2').addClass('show')

})
$('.shape_9').on('click',function (){
// $('.link8').css('background-color', 'red')
          $('.link9').addClass('show')

})



document.addEventListener('scroll', function (event) {
    if (event.target.id === 'slide1') { // or any other filtering condition
        console.log('scrolling', event.target)

        var pixel = $(document).scrollTop()
        // var documentHeight2 = $(".slide2_body").height()
        // var windowHeight2 = $('#slide2').height()
        //
        // var difference2 = documentHeight2 - windowHeight2
        // var percentage = 100 * pixel / difference2
   $('#x-model-renderLayer').css({'top': -1 * pixel , 'left': -1 * pixel  })
            // $('.scroll_side').css('left', -1 * pixel)
                // $('.fixed_side').css('top', -1 * pixel)
          console.log(pixel)
    }
}, true /*Capture event*/)

//   $(window).resize(function(){
//
// 	var window_height = $(this).height();
//
// 	$("#overview").delay(250).css({
// 		// "height":100 + 'vh',
// 		// "width":100 + 'vw'
// 	})
// 	$(".click_layer").delay(250).css({
// 		// "height":100 + 'vh',
// 		// "width":100 + 'vw'
// 	})

//
// });

// $(window).load(function(){
//
// });
