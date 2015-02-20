<?php
if(isset($_GET['image'])){
    header('Content-Type: image/png');
    header('Content-Disposition: attachment; filename="my_image.png"');
    if(preg_match('/(data:image\/)(jpg|png|gif|jpeg)+;(base64,)/', $_GET['image'], $matches)){
       $image = urldecode ($_GET['image']);
       $image = str_replace('data:image/png;base64,', '' , $_GET['image']);
       $image = base64_decode($image);
       file_put_contents(__DIR__.'/images/'.time().'.png' , $image);
       echo $image;
    }
}


?>