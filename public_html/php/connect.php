<?php
$link = mysqli_connect('localhost', 'root', '','osaka_test');
mysqli_set_charset($link, 'utf-8');
//mysql_select_db('osaka_test', $link);

function writelog($message) {
    $fp = fopen('~/log/access.log', 'a');
    fwrite($fp, date('Y-m-d H:m:s'));
    fwrite($fp, "\n");
    fwrite($fp, $message);
    fwrite($fp, "\n");
    fclose($fp);
}
