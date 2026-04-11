<?php
$servername = "localhost";
$username = "phpmyadmin";
$password = "MariaDB";
$dbname = "test";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

// sql to create table
$sql = "CREATE TABLE Studenti (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
nome VARCHAR(30) NOT NULL,
cognome VARCHAR(30) NOT NULL,
reg_date TIMESTAMP
)";

if ($conn->query($sql) === TRUE) {
    echo "Table Studenti created successfully";
} else {
    echo "Error creating table: " . $conn->error;
}

$conn->close();
?>