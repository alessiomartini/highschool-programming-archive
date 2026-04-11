<?php
/*
	Created By Supun Kavinda, Admin of Hyvor
	2018.04.28

	Updated on: 2018.06.14
*/

include_once '../config.php';

/*
	This adds new row to db_updating_table
*/

$content = !empty($_GET['content']) ? $_GET['content'] : 'No Message Defined';
$time = time();

$mysqli -> query("INSERT INTO db_updating_table (content,time) VALUES ('$content', $time)");