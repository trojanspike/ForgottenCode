<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Seasons</title>
<link rel="stylesheet" type="text/css" href="css/page_style.css">
<script type="text/javascript" src="https://www.google.com/jsapi"></script>
<script type="text/javascript">
  google.load("jquery", "1");
</script>
<script src="http://modernizr.com/downloads/modernizr-latest.js"></script>
</head>

<body class="month-<?php echo date('m'); ?> date-<?php echo date('d'); ?>">

<div class="container">
	<header class="ui-main-header"><h2>Header</h2></header>
    
    <nav class="ui-main-nav">
		<ul>
			<li><a href="#" >Home</a></li>
			<li><a href="#" id="current">Products</a>
				<ul>
					<li><a href="#">product 1</a></li>
					<li><a href="#">product 2</a></li>
					<li><a href="#">product 3</a></li>
					<li><a href="#">product 4</a></li>
			   </ul>
		  </li>
			<li><a href="/faq.php">FAQ</a>
                <ul>
                <li><a href="#">Delivery info</a></li>
                <li><a href="#">Locations</a></li>
                <li><a href="#">terms &amp; conditions</a></li>
                </ul>
          </li>
			<li><a href="/contact/contact.php">Contact</a></li>
		</ul>
    </nav>
    
    <div class="content clearfix">
    
      <aside>
        <div class="seasons-container"></div>
      </aside>
      <section></section>
    
    </div>
    
    <footer><h2>Footer</h2></footer>
</div>
<script src="js/script.js"></script>
</body>
</html>