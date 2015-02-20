/**
 * Created by lee on 12/14/13.
 */
(function($){

    var canvas = $('#my-canvas')[0]
    ctx = canvas.getContext('2d');

    ctx.fillRect(25,25,100,100);
    ctx.clearRect(45,45,60,60);
    ctx.strokeRect(50,50,50,50);

    $('#save').on('mouseup' , function(){
        $('#data-url').attr('src', canvas.toDataURL());
        $('body').append('<a target="_new" href="parser.php?image='+encodeURIComponent(canvas.toDataURL())+'">Download</a>');
    });

})(jQuery);