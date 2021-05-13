<style>
	input[type="submit"] , input[type="number"] , input[type="text"]{ display: block; padding: 10px; margin: 10px; }
	input[type="submit"] {  }
</style>
<form action="" method="POST">
	<input type="text" placeholder="Path" name="path">
	<input type="number" placeholder="STT" name="stt" value="1">
	<input type="submit" value="Submit" name="submit">
</form>

<?php

if (!empty($_POST["submit"])) {

	$path = $_POST["path"];
	$i=$_POST["stt"];
	foreach (glob($path."/*.jpg") as $filename) {
		
		$file = realpath($filename);    
		rename($file, $path . "/". $i.".jpg");
		$i++;
	}
} 



?>