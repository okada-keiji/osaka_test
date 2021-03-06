<?php
if (isset($_POST['data'])) {
    $data = json_decode($_POST['data']);
    $ret = array();
    foreach ($data as $record) {
        $param = get_object_vars($record);
        $ret[] = updateUser($param);
    }
} else {
    $ret = updateUser($_POST);
}
echo json_encode($ret);
function updateUser($param) {
    require 'connect.php';
    $fmt = "
        update employee 
        set 
        `name` = '%s',
        `kana` = '%s',
        `address` = '%s',
        `gender` = %s,
        `birthday` = '%s',
        `pref` = '%s',
        `mobile_phone` = '%s' 
        where 
        id = %s
        ";

    $sql = sprintf(
        $fmt, 
        $param["name"],
        $param["kana"],
        $param["address"],
        $param["gender"],
        $param["birthday"],
        $param["pref"],
        $param["mobile_phone"],
        $param["id"]
    );
    mysqli_query($link, $sql);

    $ret = array(
        'data' => $param,
        'success' => true
    );
    return $ret;
}
