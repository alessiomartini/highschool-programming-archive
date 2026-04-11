<?php 
echo "    
    <form action='index.php' method='GET'>
        Name:* <input type='text' name='name' value='".$name."'><span> ".$nameErr."</span><br>
        Surname:* <input type='text' name='cognome' value='".$cognome."'><span> ".$cognomeErr."</span><br>
        Class:*  <select name='classe' value='".$classe."'>
                    <option value='1'>Prima</option>
                    <option value='2'>Seconda</option>
                    <option value='3'>Terza</option>
                    <option value='4'>Quarta</option>
                    <option value='5'>Quinta</option>
                </select> <span> ".$classeErr."</span><br>
        Gender:* <span> ".$genderErr."</span><br>
            <input type='radio' name='gender' value='female'>Female<br>
            <input type='radio' name='gender' value='male'>Male<br>
            <input type='radio' name='gender' value='other'>Other<br>
        Mobile:* <input type='text' name='numero' value='".$numero."'><span> ".$numeroErr."</span><br>
        Newsletter: <input type='checkbox' name='checkbox' value='TRUE'> acconsenti?<br>
        E-mail:* <input type='text' name='mail' value='".$email."'><span> ".$emailErr."</span><br>
        <input type='submit'>
    </form>";
?>