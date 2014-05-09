<?php
require 'connect.php';
$params = get_object_vars($_POST['data']);
$ret = array();
foreach ($params as $param) {
    $ret[] = deleteUser($param);
}

function deleteUser($param){
    $fmt = "delete from users where id = %d";
    $sql = sprintf($fmt, $param->id);
    mysql_query($sql);
}
