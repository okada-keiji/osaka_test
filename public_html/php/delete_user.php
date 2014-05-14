<?php
if (isset($_POST['data'])) {
    $data = json_decode($_POST['data']);
    $ret = array();
    foreach ($data as $record) {
        $param = get_object_vars($record);
        $ret[] = deleteUser($param);
    }
} else {
    $ret = deleteUser($_POST);
}
echo json_encode($ret);

function deleteUser($param){
    require 'connect.php';
    $fmt = "delete from employee where id = %d";
    $sql = sprintf($fmt, $param["id"]);
    mysqli_query($link, $sql);
    $ret = array(
        'data' => $param,
        'success' => true
    );
    return $ret;
}
