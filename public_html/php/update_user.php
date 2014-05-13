<?php
require 'connect.php';

$param = get_object_vars($_POST['data']);
$ret = updateUser($param);
echo json_encode($ret);

function updateUser($param) {
    $fmt = "
        update employee 
        set 
            `name` = '%s',
            `kana` = '%s',
            `adress` = '%s',
            `gender` = '%s',
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
        $param["mobile_phone"]
    );

    mysqli_query($link, $sql);

    $ret = array(
        'data' => $param,
        'success' => true
    );
}

