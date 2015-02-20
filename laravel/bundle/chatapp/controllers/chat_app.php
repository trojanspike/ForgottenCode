<?php

class Chatapp_Chat_App_Controller extends Base_Controller {

    private $_userData, $_test = false;
    
    public function __construct ()
    {
        if($this->_test)
        {
            Session::put('chatapp', array('username' => 'user_session_'.rand ( 12 , 8566 )));
            // Session::flush();
        }
        $this->_userData = Session::get('chatapp');
    }
    
    /*
     * no route set up -> plan to show all messages on one large page
     */
    public function action_index()
    {
        // $messages = DB::table('chatapp')->where('username', '=' , '@'.$this->userData['username'])->get();
    }
    
    /*
     * method _get
     * expect ajax get
     * return json-object 10 messages
     */
    public function action_get()
    {
        if(Request::ajax())
        {
            $messages = DB::table('chatapp')->order_by('id', 'desc')->take(10)->get();
            return json_encode(array('messages'=> $messages , 'chatapp'=> (isset($this->_userData))?$this->_userData:false ));
        }
        else
        {
            // no ajax request found : user going through urls : maybe API possibility with jsonP
           return json_encode(array('error' => true));
        }
    }
    
    /*
     * method _put
     * expects ajax post['message']
     * return json-object message
     */
    public function action_put()
    {
        if(Request::ajax() && isset($this->_userData) )
        {
            // PLAN - want to parse the message for @username and alert | notify them of this message
            // #link[title]=wensite.com/page.html // safe link off maybe
            // #yt[title]=youtube-id  // poss play on site with a chrome player
            // insert a json object
            /*
             * {users:[], message:''}
             */
                DB::table('chatapp')->insert(array(
                    'username' => '@'.$this->_userData['username'],
                    'message' => HTML::entities(Input::get('message')),
                    'created_at' => date("Y-m-d H:i:s"),
                    'updated_at' => date("Y-m-d H:i:s")
                ));

                return json_encode(array('user'=>'@'.$this->_userData['username'], 'date'=>date("Y-m-d H:i:s") , 'message' => HTML::entities(Input::get('message')) ));
                
        }
    }

}