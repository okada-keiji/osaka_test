<?php
require 'connect.php';

//$sql = "SELECT * FROM employee";
if( isset($_GET['limit']) ){
    $limit = $_GET['limit'];
}
if( isset($_GET['start']) ){
    $start = $_GET['start'];
}

// フィルターの処理
if( isset($_GET['filter']) ) {
    $filters = json_decode($_GET['filter']);
    $wheres = array();
    foreach( $filters as $filter ) {
        $wheres[] = "$filter->property = '$filter->value'";
    }
    $where = implode(' AND ', $wheres);
}

// ソートの処理
if( isset($_GET['sort']) ) {
    $sorters = json_decode($_GET['sort']);
    $orders = array();
    foreach ($sorters as $sorter) {
        $orders[] = "$sorter->property $sorter->direction";
    }
    $order = implode(',' ,$orders);
}

$sql = "SELECT SQL_CALC_FOUND_ROWS * FROM employee ";
if( isset($where) ){
    $sql .= " WHERE $where";
}
if( isset($order) ){
    $sql .= " ORDER BY $order";
}
if( isset($start) ) {
    $sql .= " LIMIT $start, $limit";
}

$result = mysqli_query($link, $sql);

$data = array();
while($row = mysqli_fetch_array($result, MYSQLI_ASSOC)){
    $data[] = $row;
}


$sql = "SELECT FOUND_ROWS()";
if( isset($where) ){
    $sql .= " WHERE $where";
}
$result = mysqli_query($link, $sql);
$row = mysqli_fetch_row($result);
$count = $row[0];

$ret = array(
    'data' => $data,
    'total' => $count,
    'success' => true
);

echo json_encode($ret);
