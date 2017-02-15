<?php
/**
 * Created by IntelliJ IDEA.
 * User: majid
 * Date: 2/15/17
 * Time: 12:29 PM
 */


//Start Timer before the code that you want to evaluate
$time_start = microtime(true);

/*
 * Do whatever you want to do,
 */

//End Timer before the code that you want to evaluate
$time_end = microtime(true);

$execution_time = number_format(($time_end - $time_start), 2, '.', ',');

//execution time of the script
echo '<b>Total Execution Time:</b> ' . $execution_time . ' Seconds<br/>';
