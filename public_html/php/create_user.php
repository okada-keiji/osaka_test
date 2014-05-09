<?php
// データベースへ接続
require 'connect.php';

// パラメーターをデコード
//
$params = get_object_vars($_POST['data']);
$ret = array();
foreach ($params as $param) {
    $ret[] = createUser($param);
}
// json 形式で返す
echo json_encode($ret);

function createUser($param) {
    // DBにデータを保存
    $fmt = "
        insert into employee (
            `name`,
            `kana`,
            `gender`,
            `birthday`,
            `email`,
            `pref`,
            `mobile_phone`
        ) 
        values ('%s', '%s', %s, '%s', '%s', '%s')
        ";
    $sql = sprintf(
        $fmt, 
        $param->name,
        $param->kana,
        $param->gender,
        $param->birthday,
        $param->email,
        $param->pref,
        $param->mobile_phone,
        $param->age
    );
    mysql_query($sql);

    // 挿入したレコードのidを取得
    $param->id = mysql_insert_id($link);

    // レスポンスをセット
    $ret = array(
        'data' => $param,
        'total' => count($data),
        'success' => true
    );
    return $ret;
}

