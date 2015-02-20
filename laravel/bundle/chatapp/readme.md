#1 : move ./chatapp/ to /public/bundles/chatapp/

#2 : set port number in ./nodejs/server.js

#3 : add to head -> HTML::style('bundles/chatapp/css/chatapp.css');
#4 : add into common view -> footer maybe ? {
        
    // edit data-port & data-title to your choice :
        <!-- :#chat-app --><div id="chat-app" class="in-active" data-port="7575" data-title="PHPacademy chat"></div><!-- /#chat-app -->

   // edit you website addr
        <script src="http://mywebsite.com:7575/socket.io/socket.io.js"></script>
        <?php echo HTML::script('bundles/chatapp/js/chatapp.js'); ?>
    }

#5 : fire up node server {

    terminal = nohup node /path/to/bundle/chatapp/nodejs/server.js &


    nohup -> no hangup , keeps going when terminal is closed
    & -> run in background , so terminal can be closed.
}


#6 : in your login controller on a successful login you need to add an array to Session::put('chatapp', array){
    array('username' => ?)

    // Session::put('chatapp', array('username' => 'chatapp_user_'.rand ( 12 , 8566 )));
}