<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Authorization, Access-Control-Allow-Methods, Access-Control-Allow-Headers, Allow, Access-Control-Allow-Origin");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS, HEAD");
header("Allow: GET, POST, PUT, DELETE, OPTIONS, HEAD");
require_once 'database.php';
$tabla = new DataBase('cargar_calificaciones');
$conexion = new mysqli("localhost", "root", "", "siceapp");
switch($_SERVER['REQUEST_METHOD']){
    case "GET":
    break;
    case "POST":
        if(isset($_POST['clave_unica_alu']) && isset($_POST['id_gru'])){
            
        }else{
            $res = array("result"=>"no","msg"=>"Faltan datos");
        }
        header("HTTP/1.1 200 OK");
        echo json_encode($res);
    break;
}    