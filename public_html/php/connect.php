<?php
$link = mysql_connect('localhost', 'root', '');
mysql_set_charset('utf8', $link);
mysql_select_db('osaka_test', $link);

function writelog($message) {
    $fp = fopen('~/log/access.log', 'a');
    fwrite($fp, date('Y-m-d H:m:s'));
    fwrite($fp, "\n");
    fwrite($fp, $message);
    fwrite($fp, "\n");
    fclose($fp);
}
