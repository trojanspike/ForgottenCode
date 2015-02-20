<?php 
include('core/classes/theme.class.php');
$theme = new theme_changer('theme1');

 ?>
<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="keywords" content="<?php echo $theme->get_config_data('keywords'); ?>">
<meta name="description" content="<?php echo $theme->get_config_data('description'); ?>">
<link rel="shortcut icon" href="<?php echo $theme->get_config_data('favicon'); ?>">
<title>Themes &raquo; <?php echo $theme->get_config_data('name'); ?></title>
<style>
*{ padding:0px; margin:0px;}
body { margin-top:55px; background-color:#666;}
</style>
<?php $theme->css(); ?>
<link rel="stylesheet" type="text/css" href="ext/css/theme_changer.css">
<script type="text/javascript" src="https://www.google.com/jsapi"></script>
<script type="text/javascript">
  google.load("jquery", "1");
var GET_theme = '<?php echo $theme->theme_view; ?>';
</script>
<?php $theme->top_js(); ?>
</head>
<body>

<div id="theme-changer-container" class="class">
	<div class="theme-changer-section logo">
        	<h3><?php echo $theme->get_config_data('name'); ?></h3>
    </div>
    
    
    <div class="theme-changer-section select-theme">
    	<div id="theme-changer-select-container">
        	<p>Select a theme </p><div class="arrow-down"></div>
        	<ul id="theme-changer-select">
            	<?php echo $theme->li_links_to_themes(); ?>
             </ul>
            
        </div> <!-- /#theme-changer-select-container -->
    </div>
    
    
    <div class="theme-changer-section download">
    	<?php echo $theme->get_config_data('theme_download'); ?>
    </div>
    <div class="theme-changer-section">
    	<a href="javascript:;" id="theme-bar-hide">&lt;&lt;&lt;</a>    	
    </div>
</div>


<?php $theme->get_config_data('name'); ?>
<?php $theme->li_links_to_themes(); ?>
<div id="theme-container"><?php echo $theme->html(); ?></div>


<script src="ext/js/script.js?<?php echo time(); ?>"></script>
<?php $theme->bottom_js(); ?>
</body>
</html>