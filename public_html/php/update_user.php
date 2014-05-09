<?php
require 'connect.php';

$params = get_object_vars($_POST['data']);
$ret = array();
foreach ($params as $param) {
    $ret[] = updateUser($param);
}
echo json_encode($ret);

function updateUser($param) {
    $fmt = "
        update employee 
        set 
            `name` = '%s',
            `department_id` = '%s',
            `email` = '%s',
            `gender` = '%s',
            `age` = %s
        where 
            id = %s
        ";

    $sql = sprintf(
        $fmt, 
        $param->name,
        $param->department_id,
        $param->email,
        $param->gender,
        $param->age,
        $param->id
    );

    mysql_query($sql, $link);

    $ret = array(
        'data' => $param,
        'success' => true
    );
}

