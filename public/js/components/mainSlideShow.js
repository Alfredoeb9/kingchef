$(function() {
       $("#slideshow > div:gt(0)").hide();

    setInterval(function() { 
    $('#slideshow > div:first')
        .fadeOut('slow')
        .next()
        .fadeIn('slow')
        .end()
        .appendTo('#slideshow');
    },  4000);

    $('#datePicker').datetimepicker({
        timepicker: false,
        format: 'm.d.Y'
    });
    jQuery('#datetimepicker2').datetimepicker({
        datepicker:false,
        format:'H:i'
      });
});
 