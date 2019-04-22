
// $(document).on('scroll' , function(){
//
// // var pixels = $(document).scrollTop()
// // var documentHeight = $(document).height()
// // var windowHeight = $(window).height()
// //
// // var difference = documentHeight - windowHeight
// // var percentage = 100 * pixels / difference
// // $('.threed').addClass(".transform")
//
//
//   $('.threed').addClass('.transfrom');
//
//
//
// // let modelElem = createModelElement('x-model', -1800, 9000, 90000);
//
//
// // if($(document).scrollTop()<750){
// // var pixels = $(document).scrollTop()
// // $('.overview').css('left', -1 * pixels)
// // }
// // if($(document).scrollTop()>739){
// // var pixel = $(document).scrollTop()
// // $('.overview').css('top', -1 * pixel )}
// // console.log(pixels);
//     // $('.overview').css('left', -1 * pixels)
//
//   })


//


    document.addEventListener('scroll', function (event) {
        if (event.target.id === 'slide1_1') { // or any other filtering condition
            console.log('scrolling', event.target)

            var pixel = $('#slide1_1').scrollTop()
            // var documentHeight2 = $(".slide2_body").height()
            // var windowHeight2 = $('#slide2').height()
            //
            // var difference2 = documentHeight2 - windowHeight2
            // var percentage = 100 * pixel / difference2
       $('#x-model').css({'top': +2 * pixel , 'left': -1 * pixel  })
                // $('.scroll_side').css('left', -1 * pixel)
                    // $('.fixed_side').css('top', -1 * pixel)
              console.log(pixel)
        }
    }, true /*Capture event*/)

    $(document).ready( function scroll_to(init_top, init_left){
      var init_top = $("#overview").offset().top+575;
     var init_left = $("#overview").offset().left+700;
     $("#overview").addClass("zoom-out")

      $('html,body').animate({
     scrollTop: init_top,
      scrollLeft:init_left}, 300);


    // console.log(init_top)

    })

      var window_height = $(window).height();
      var window_width= $(window).width();
      //
      // function scroll_to(init_top,init_left) {
      // 	$(document).animate({
      // 		scrollTop: init_top,
      // 		scrollLeft:init_left
      // 	}, 0.1);
      // }





// $(".click_layer").css({"height":2200 + "width":2600})
// $(".click_layer").css('pointer-events', 'none')
      	var image_width = $("#overview").width()
      	var image_height = $("#overview").height()


      	// $("#center").css({'top': image_height/2 , 'left': image_width/2 });

  //
  //       var init_top = $("#overview").offset().top+800;
	//      var init_left = $("#overview").offset().left+700;
  // console.log(init_left)
  // console.log(init_top)
  //     	scroll_to(init_top,init_left)


// $("#slide1").css('opacity', 0);
$('#overview').on('click', function(e){


            if($('.zoom-out').is(':visible')){
              var image_width = $("#overview").width()
              var image_height = $("#overview").height()
            $("#overview").removeClass("zoom-out").addClass("zoom-in")
      			// $(".overview").removeClass("zoom-out").addClass("zoom-in");
      			// if($("#center").length != 0) {
      			// 	$("#center").remove();
      			// }
      			$("#overview").css({"height":84 + 'vw', "width":window_width})
            	$(".click_layer").css({"height":84 + 'vw', "width":window_width})
                	$(".click_layer").css('opacity',1)
            // scroll_to({'top':0,'left':0})

            // console.log(window_height);
}else{
  // $(".overview.zoom-in").on('click',function(){

  $("#overview").removeClass("zoom-in").addClass("zoom-out")
  $("#overview").css({"height":2200, "width":2600})
  	// $(".click_layer").css('opacity',0)

  $(".click_layer").css({"height":2200 , "width":2600})
       var offset_top = e.pageY;
       var offset_left = e.pageX;
       // var window_height = $(window).height();
       // var window_width= $(window).width();
       // var image_width = $(".overview").width()
       // var image_height = $(".overview").height()
       var overview_image_width = $("#overview").width()
       var overview_image_height = $("#overview").height()

       var top = Math.round(((offset_top*2200)/694)-(window_height/2));
       var left = Math.round(((offset_left*2600)/849)-(window_width/2));

     scroll_to(top,left)
       console.log(window_width)
    //    $(this).removeClass("zoom-in").addClass("zoom-out")
    //    var this_top = $(this).offset().top
    //    var this_left = $(this).offset().left
    //    $(this).css({"height":overview_image_height, "width":overview_image_width})
    //    scroll_to(this_top,this_left)
    // console.log(this)
    //  })


}


            if($('.zoom-in').is(':visible')){
              // $(".click_layer").css({"height":2200 + "width":2600})
            }

})
$('.shape_1').on('click',function (){

          $(".audio1").toggleClass('show')

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

})
$('.shape_2').on('click',function (){
// $('.link8').css('background-color', 'red')
          $('.link1').addClass('show')

})
//   $(window).resize(function(){
//
// 	var window_height = $(this).height();
//
// 	$(".overview").delay(250).css({
// 		// "height":100 + 'vh',
// 		// "width":100 + 'vw'
// 	});
//
// });

// $(window).load(function(){
//
// });
