<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Authorization, Access-Control-Allow-Methods, Access-Control-Allow-Headers, Allow, Access-Control-Allow-Origin");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS, HEAD");
header("Allow: GET, POST, PUT, DELETE, OPTIONS, HEAD");
require_once 'database.php';
$tabla = new DataBase('maestros');
switch($_SERVER['REQUEST_METHOD']){
    case "GET":
        if(isset($_GET['id'])){
           // $where = array('correo_mae'=>$_GET['correo']);
           // $res = $tabla->ReadAll($where);
           $res = $tabla->ReadAll();
        }else{
            $res = $tabla->ReadAll();
        }
        header("HTTP/1.1 200 OK");
        echo json_encode($res);
    break;
    case "POST":
        if(isset($_POST['nombre']) && isset($_POST['ap_pat']) && isset($_POST['ap_mat']) && isset($_POST['correo']) && isset($_POST['telefono'])
        && isset($_POST['contra'])){
            $pass_hash = password_hash($_POST['contra'], PASSWORD_DEFAULT);
            $datos = array(
                'id_mae' => 0,
                'nombre_mae'=> strtoupper ( $_POST['nombre']),
                'ap_pat_mae'=> strtoupper ( $_POST['ap_pat']),
                'ap_mat_mae'=> strtoupper ( $_POST['ap_mat']),
                'correo_mae'=>$_POST['correo'],
                'telefono_mae'=> $_POST['telefono'],
                'contra_mae'=>$pass_hash
            );
            try{
                $reg = $tabla->create($datos);
                $res = array("result"=>"ok","msg"=>"Se guardo el docente", "id"=>$reg);
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