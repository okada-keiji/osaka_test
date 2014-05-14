<?php
if (isset($_POST['data'])) {
    $data = json_decode($_POST['data']);
    $ret = array();
    foreach ($data as $record) {
        $param = get_object_vars($record);
        $ret[] = createUser($param);
    }
} else {
    $ret = createUser($_POST);
}
// json 形式で返す
echo json_encode($ret);

function createUser($param) {
    require 'connect.php';
    // DBにデータを保存
    $fmt = "
        insert into employee (
            `name`,
            `kana`,
            `address`,
            `gender`,
            `birthday`,
            `pref`,
            `mobile_phone`
        ) 
        values ('%s', '%s', '%s', %s, '%s', '%s', '%s')
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

    // 挿入したレコードのidを取得
    $param["id"] = mysqli_insert_id($link);
    // レスポンスをセット
    $ret = array(
        'data' => $param,
        'success' => true
    );
    return $ret;
}

