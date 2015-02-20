;(function(win, doc, $, undefined){
    
     if(typeof win.io === 'undefined')
        {
            $('#chat-app').remove();
            return;
        }
    var _socket = win.io.connect(win.location.origin + ':' + $('#chat-app').data('port'));
    var _temp ='<div id="chat-options" class="chat-inner"><ul><li id="online-count">0</li>';
    _temp +='<li id="chat-arrow" class="arrow"></li><li><h5>'+$('#chat-app').data('title')+'</h5></li></ul></div>';
    _temp +='<div id="chat-messages" class="chat-inner"><ul></ul></div><div id="chat-input" class="chat-inner"><span>20</span>';
    _temp +='<textarea id="message-box"></textarea><a href="/post" muse_scanned="true">Send</a></div>';
    $('#chat-app').html(_temp);
    
        $('#chat-options ul').on('click' , function(){
            $('#chat-arrow').toggleClass('active');
            $('#chat-app').toggleClass('in-active');
        });
    var _USER = {
        name : null,
        urlPos : win.location.href
    };
/**/
$.getJSON('chatapp/get' , function(json){
    
    if(json.chatapp !== false){
        _USER.name = json.chatapp.username;
        _socket.emit('init', _USER);
    } else {
        $('#chat-input').html('<h4 class="chat-inner" style="text-align:center;">please log in for message updates.</h4>');
    }
    
    $.each(json.messages, function(key, value){
        $('#chat-messages ul').append('<li><h6>'+value.username+' <time datetime="'+value.updated_at.split(' ').join('T')+'Z">'+value.updated_at+'</time></h6><p>'+value.message+'</p></li>');
    });
});

/*
 * text area keyup event
 */
$('textarea#message-box').on('keyup' , function(event){
    if($('textarea#message-box').val().length > 180){
        $('#chat-input span').fadeIn(450);
        $('#chat-input span').text( 200 - $('textarea#message-box').val().length);
    } else {
        $('#chat-input span').fadeOut(450);
    }
    
    if($('textarea#message-box').val().length > 200){
        $('#chat-input span').text(0);
        $('textarea#message-box').val($('textarea#message-box').val().substr(0,200));
    }
});

/*
 * textarea submit event
 */
$('#chat-app').find("[href='/post']").on('click', function(event){
    if($('textarea#message-box').val().length < 4){
        return false;
    }
    
    $.post('chatapp/put', {message:$('textarea#message-box').val()}, function(json){
            _socket.emit('message_post', json);
            $('textarea#message-box').val('')
        }, 'JSON');
        
    return false;
});

/*
 * emitted message - reciever
 */
_socket.on('message_recieve', function(data){
        $('#chat-messages ul').prepend('<li><h6>'+data.user+' <time>'+data.date+'</time></h6><p>'+data.message+'</p></li>');
});

/*
 * emitted count update
 */
_socket.on('online_count', function(count){
    $('#online-count').html(count.onlineL);
}); 
})(window, document, jQuery);