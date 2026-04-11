<?php

/*
	Created By Supun Kavinda, Admin of Hyvor
	2018.04.28

	Updated On: 2018.06.14
*/


session_write_close();
ignore_user_abort(false);
set_time_limit(40);

try {

	include_once '../config.php';

	if (empty($_COOKIE['user'])) {
		$user = rand(0,10000000);
		// send to the browser
		setcookie('user', $user);

		// save in global variable
		$_COOKIE['user'] = $user;

		// add user to the database
		$mysqli -> query("INSERT INTO db_user_data VALUES ($user, 0)");

		// first request does not do anything than creating the cookie
		exit();
	}

	// get the user value 
	$user = $_COOKIE['user'];

	while (true) {

		// select new rows
		$result = $mysqli -> query("SELECT t.id, t.content, t.time FROM db_updating_table t INNER JOIN db_user_data ud ON ud.last_sent_id < t.id WHERE ud.user = $user ORDER BY t.id");

		// check whether there were new rows in above query
		if ($result && $result -> num_rows) {
			//if yes, makes the output
			$output = [];

			// this is used to update the db_user_data table at last. As rows are ordered by t.id in ascending order in above query, last row has the last Id
			$lastId = 0;
			foreach ($result as $row) {
				$output[] = [
					'content' => $row['content'], 
					'time' => $row['time']];

				$lastId = $row['id'];
			}

			// update the table and set last_sent_id to the last sent row id of other table.
			$mysqli -> query("UPDATE db_user_data SET last_sent_id = $lastId WHERE user = $user");


			echo json_encode([
				'status' => true,
				'data' => $output
			]);
			exit;
		}



		// db queries are heavy. So 2 seconds
		sleep(2);
	}

} catch (Exception $e) {

	exit(
		json_encode(
			array (
				'status' => false,
				'error' => $e -> getMessage()
			)
		)
	);

}