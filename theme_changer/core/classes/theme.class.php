<?php
class theme_changer {
	
	private $errors = array();
	private $theme_config;
	
	private $theme_folders;
	private $default_theme;
	
	public $theme_view;
	
	/*##########################################
	* -
	* @ pram :
	* @
	****/
	function __construct($default)
	{
		if($default != 'ajax'){
		
		$files = scandir('themes');
		unset($files[0], $files[1]);
		$this->theme_folders = array_values($files);
		
		$this->default_theme = (is_dir('themes/'.$default))? $default : $this->theme_folders[0] ;
		
		if(isset($_GET['theme'])){
			$this->theme_view($_GET['theme']);
			} else { 
			header('Location:'.$_SERVER['REQUEST_URI'].'?theme='.$this->default_theme);
				}
		}
	} // __construct()
	
	/*##########################################
	* -
	* @ pram :
	* @
	****/
	public function theme_view($view)
	{
		if(in_array($view, $this->theme_folders))
		{
			$this->theme_view = $view;
			if(file_exists('themes/'.$view.'/config.php')){
				$this->_config_error_checks('themes/'.$view.'/config.php');
			} else {
				$this->errors[]='No config.php file was found.';
				}
		} else {
			$this->theme_view = $this->default_theme;
			$this->_config_error_checks('themes/'.$this->theme_view.'/config.php');
		}
	}
	
	/*##########################################
	* -
	* @ pram :
	* @
	****/
	public function get_config_data($key)
	{
		switch($key){
			case 'favicon' :
			return (isset($this->theme_config[$key])) ? 
				'themes/'.$this->theme_view.'/'.$this->theme_config[$key]
			 	: '' ;
			break;
			
			case 'theme_download':
			return (isset($this->theme_config[$key])) ?
				"<a href='themes/{$this->theme_view}/{$this->theme_config[$key]}' class='theme-changer-download'>Download</a>"
			 : '' ;
			break;
					
			default;
			return (isset($this->theme_config[$key])) ? $this->theme_config[$key] : '' ;
		}
	}
	
	/*##########################################
	* -
	* @ pram :
	* @
	****/
	private function _config_error_checks($config)
	{
		include($config);
			if(isset($_theme)){
			$this->theme_config = $_theme;
		if(!isset($this->theme_config['extension'])
		|| $this->theme_config['extension'] == ''
		|| !isset($this->theme_config['name'])
		|| $this->theme_config['name'] == ''
		|| !isset($this->theme_config['description'])
		|| $this->theme_config['description'] == ''
		|| !isset($this->theme_config['favicon'])
		|| $this->theme_config['favicon'] == ''
		|| !isset($this->theme_config['keywords'])
		|| $this->theme_config['keywords'] == ''){
			$this->errors[]='config.php errors found [extension, name, description, favicon, keywords] need to be supplied.';
			}
		
		if(isset($this->theme_config['keywords']) && !is_string($this->theme_config['keywords']))
		{
			$this->errors[]=$this->theme_view. ' file config keywords must be a string.';
		}
		
		if(isset($this->theme_config['theme_download']) && !file_exists('themes/'.$this->theme_view.'/'.$this->theme_config['theme_download']))
		{
			$this->errors[]=$this->theme_view. ' file config Download was not found.';
		}
		
		if(isset($this->theme_config['favicon']) && !file_exists('themes/'.$this->theme_view.'/'.$this->theme_config['favicon']))
		{
			$this->errors[]=$this->theme_view. ' file config favicon not found.';
		}
		
		if(isset($this->theme_config['description']) && !is_string($this->theme_config['description']))
		{
			$this->errors[]=$this->theme_view. ' file config description must be a string.';
		}
			} else {$this->errors[]='Config $_theme is not set';}
		if(empty($this->errors)){$this->theme_config = $_theme;}
	} // _config_error_checks()
	
	/*##########################################
	* -
	* @ pram :
	* @
	****/
	public function li_links_to_themes()
	{
		$li = '';
		foreach($this->theme_folders as $theme){
			$li .= '<li><a href="?theme='.$theme.'">'.$theme.'</a></li>';
		}
		return $li;
	} /* links_to_themes() */
	
	/*##########################################
	* -
	* @ pram :
	* @
	****/
	public function html()
	{
		$html = '';
		if(empty($this->errors)){
			if(file_exists('themes/'.$this->theme_view.'/index.'.$this->theme_config['extension'])){
				$content = file_get_contents('themes/'.$this->theme_view.'/index.'.$this->theme_config['extension']);
				$html .= $this->parse_html($content, $this->theme_view);
		} else {
			$this->errors[]=$this->theme_view. ' config $_theme[\'extension\'] error.';
			$html .= $this->display_errors();
				}
		} else {
			$html .= $this->display_errors();
		}
		return $html;
	} /* html()  */
	
	/*##########################################
	* -
	* @ pram :
	* @
	****/
	public function bottom_js() 
	{
		if(empty($this->errors)){
		if(is_array($this->theme_config['bottom_js'])){
			foreach($this->theme_config['bottom_js'] as $bottom_js)
			{
				echo '<script src="themes/'.$this->theme_view.'/js/'.$bottom_js.'"></script>';
			}
		} else {
		echo '<script src="themes/'.$this->theme_view.'/js/'.$this->theme_config['bottom_js'].'"></script>';
		}
		} // if)
	}
	
	/*##########################################
	* -
	* @ pram :
	* @
	****/
	public function top_js() 
	{
			if(empty($this->errors)){
		if(is_array($this->theme_config['top_js'])){
			foreach($this->theme_config['top_js'] as $top_js)
			{
				echo '<script src="themes/'.$this->theme_view.'/js/'.$top_js.'"></script>';
			}
		} else {
		echo '<script src="themes/'.$this->theme_view.'/js/'.$this->theme_config['top_js'].'"></script>';
		}
			} // if)
	}
	
	/*##########################################
	* -
	* @ pram :
	* @
	****/
	public function css() 
	{
			if(empty($this->errors)){
		if(is_array($this->theme_config['css'])){
			foreach($this->theme_config['css'] as $css)
			{
				echo '<link rel="stylesheet" type="text/css" href="themes/'.$this->theme_view.'/css/'.$css.'">';
			}
		} else {
		echo '<link rel="stylesheet" type="text/css" href="themes/'.$this->theme_view.'/css/'.$this->theme_config['css'].'">';
		}
			} // if)
	}
	
	/*##########################################
	* -
	* @ pram :
	* @
	****/
	private function display_errors()
	{
		$html = '<div class="theme-errors"><h4>ERRORS FOUND</h4><ul>';
		foreach($this->errors as $error){
			$html .= '<li>&raquo; '.$error.'</li>';
		}
		return $html.'</ul></div>';
	}
	
	/*##########################################
	* -
	* @ pram :
	* @
	****/
	public function ajax_load_page($REQUEST)
	{
		if(file_exists('../themes/'.$REQUEST['theme'].'/'.$REQUEST['target'])){
				$content = file_get_contents('../themes/'.$REQUEST['theme'].'/'.$REQUEST['target']);
				$return['status']=true;			
				$return['content']=$this->parse_html($content, $REQUEST['theme']);
				return $return;
		} else {
			$return['status']=false;
			$return['message']='Error : '.'../themes/'.$REQUEST['theme'].'/'.$REQUEST['target'].' [not found]';
			return $return;
		}
		
	} // ajax_load_page()
	
	/*##########################################
	* -
	* @ pram :
	* @
	****/
	private function parse_html($html, $theme)
	{
		$html = preg_replace('/src="/', 
				'src="themes/'.$theme.'/', 
				$html);
		$html = preg_replace("/src='/", 
				"src='themes/{$theme}/", 
				$html);
		return $html;		
	}
}
?>