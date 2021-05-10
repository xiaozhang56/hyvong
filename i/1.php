<?php

// your folder name, here I am using templates in root
$directory = '';
$i=0;
foreach (glob($directory."*.jpg") as $filename) {
	$i++;
    $file = realpath($filename);
    //var_dump($file);
    rename($file, $i.".jpg");
}

?>