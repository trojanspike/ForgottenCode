<?php

if(isset($_REQUEST['ajax']))
{
	$json = array();
	$ajax = $_REQUEST['ajax'];
	require_once('classes/theme.class.php');
	$theme = new theme_changer('ajax');
	$json = $theme->ajax_load_page($_REQUEST);
	
	echo json_encode($json);
} else {
	exit();
}