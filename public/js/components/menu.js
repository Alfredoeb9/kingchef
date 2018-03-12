$(function() {
   
     let lunchContainer = document.querySelectorAll('.lunchmenu'),
    dinnerContainer = document.querySelectorAll('.dinnermenu');
        
        
    $('.lunchbtn').click(function(event) {
        $('.dinnermenu').removeClass('active');
        $('.lunchmenu').addClass('active');
        $('.mainmenuHeading').text('Lunch Menu');
            
    });
        
    $('.dinnerbtn').click(function() {
        $('.lunchmenu').removeClass('active');
        $('.dinnermenu').addClass('active');
        $('.mainmenuHeading').text('Dinner Menu');
    });

    $("#slideshow > div:gt(0)").hide();
 
     setInterval(function() { 
     $('#slideshow > div:first')
         .fadeOut('slow')
         .next()
         .fadeIn('slow')
         .end()
         .appendTo('#slideshow');
     },  4000);
 });