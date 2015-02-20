<?php
Route::group(array(), function()
{
    //- Route::get('(:bundle)', array('uses' => 'chatapp::chat_app@index'));
    
    Route::post('(:bundle)/put', array('uses' => 'chatapp::chat_app@put'));
 
    Route::get('(:bundle)/get', array('uses' => 'chatapp::chat_app@get'));
});

?>