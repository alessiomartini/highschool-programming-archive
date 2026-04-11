<?php

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
    }

$nameErr = $cognomeErr = $classeErr = $genderErr = $emailErr = $numeroErr = "";
$name = $cognome = $classe = $gender = $email = $numero = $checkbox = "";

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    if (empty($_GET)) {               //prima richiesta senza parametri
        include('varform.php'); 
    } 
    else {
        if (empty($_GET["name"])) {
            $nameErr = "Name is required";
        } elseif (!preg_match("/^\p{L}+$/ui",$_GET["name"])) {
            $nameErr = "Only letters and white space allowed"; 
        } else {
            $name = test_input($_GET["name"]);
        }

        if (empty($_GET["cognome"])) {
            $cognomeErr = "Cognome is required";
        } elseif (!preg_match("/^\p{L}+$/ui",$_GET["cognome"])) {
            $cognomeErr = "Only letters and white space allowed"; 
        } else {
            $cognome = test_input($_GET["cognome"]);
        }
    
        if (empty($_GET["classe"])) {
            $classeErr = "Classe is required";
        } else {
            $classe = test_input($_GET["classe"]);
        }
    
        if (empty($_GET["gender"])) { 
            $genderErr = "Gender is required";
        } else {
            $gender = test_input($_GET["gender"]);
        }
    
        if (empty($_GET["mail"])) {
            $emailErr = "Email is required";
        } elseif (!filter_var($_GET["mail"], FILTER_VALIDATE_EMAIL)) {
            $emailErr = "Invalid email format"; 
        } else {
            $email = test_input($_GET["mail"]);
        }
    
        if (empty($_GET["numero"])) {
            $numeroErr = "Mobile is required";
        } elseif (!preg_match("/^[0-9 ]*$/",$_GET["numero"])) {
            $numeroErr = "Only numbers and white space allowed"; 
        } else {
            $numero = test_input($_GET["numero"]);
        }
    
        if (empty($_GET["checkbox"])) {
            $checkbox = "FALSE";
        } else {
            $checkbox = "TRUE";
        }

        // if all is filled in
        if (empty($nameErr) && empty($cognomeErr) && empty($classeErr) && empty($genderErr) && empty($emailErr) && empty($numeroErr)) {
            include('filledform.php'); 
        } else { 
            include('varform.php'); 
        }
    }
}

?>