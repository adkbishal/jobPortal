<?php

    try {
        $servername= "localhost";
        $username= "root";
        $password= "";
        $db_name= "jobportal";

        $conn= new PDO("mysql:host=$servername;dbname=$db_name", $username, $password);

        $conn-> setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );

        // echo "Connection Success";

    } catch( PDOException $e ) {
        
        echo " Connection Failed. ". $e-> getMessage();
    }

?>