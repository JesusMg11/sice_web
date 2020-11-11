<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Authorization, Access-Control-Allow-Methods, Access-Control-Allow-Headers, Allow, Access-Control-Allow-Origin");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS, HEAD");
header("Allow: GET, POST, PUT, DELETE, OPTIONS, HEAD");
require_once 'database.php';
$tabla = new DataBase('avisos');
switch($_SERVER['REQUEST_METHOD']){
    case "GET":
        if(isset($_GET['id'])){
           // $where = array('id_avi'=>$_GET['id']);
            $res = $tabla->ReadAll();
        }else{
            $res = $tabla->ReadAll();
        }
        header("HTTP/1.1 200 OK");
        echo json_encode($res);
    break;

    case "POST":
        if(isset($_POST['mensaje'])){
            $datos = array(
                'id_avi' => 0,
                'mensaje_avi'=>$_POST['mensaje'],
                'fecha_avi'=> date("Y-m-d")
            );
            try{
                $reg = $tabla->create($datos);
                $res = array("result"=>"ok","msg"=>"Se guardo el aviso", "id"=>$reg);
            }catch(PDOException $e){
                $res = array("result"=>"no","msg"=>$e->getMessage());
            }
        }else{
            $res = array("result"=>"no","msg"=>"Faltan datos");
        }
        header("HTTP/1.1 200 OK");
        echo json_encode($res);
    break;
}