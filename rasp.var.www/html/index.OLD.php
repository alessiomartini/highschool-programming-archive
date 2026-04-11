<!DOCTYPE html>
<html>
<body>

<h1> 
<?php
#echo "ciao2 :";
$myfile = fopen("/sys/class/thermal/thermal_zone0/temp", "r") or die("Unable to open file!");
$cpuTemp0 = fread($myfile,100);
$cpuTemp1 = $cpuTemp0/1000;
$cpuTemp2 = $cpuTemp0/100;
$cpuTempM = $cpuTemp2 % $cpuTemp1;
echo $cpuTemp0, "\n";
echo $cpuTemp1, "\n";
echo $cpuTemp2, "\n";
echo $cpuTempM, "\n";
#echo "CPU: ", $cpuTemp1, ",", $cpuTempM, "°C";
fclose($myfile);
?>
</h1>

</body>
</html>

