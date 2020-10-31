<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Authorization, Access-Control-Allow-Methods, Access-Control-Allow-Headers, Allow, Access-Control-Allow-Origin");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS, HEAD");
header("Allow: GET, POST, PUT, DELETE, OPTIONS, HEAD");
require_once 'database.php';
$tabla = new DataBase('alumnos');
switch($_SERVER['REQUEST_METHOD']){
    case "GET":
        if(isset($_GET['user'])){
            $where = array('clave_unica_alu'=>$_GET['user']);
            $res = $tabla->ReadAll($where);
        }else{
            $res = $tabla->ReadAll();
        }
        header("HTTP/1.1 200 OK");
        echo json_encode($res);
    break;
    case "POST":
        if(isset($_POST['nombre']) && isset($_POST['ap_pat']) && isset($_POST['ap_mat']) && isset($_POST['tipo']) && isset($_POST['clave'])
        && isset($_POST['correo']) && isset($_POST['contra'])){
            $datos = array(
                'id_alu' => 0,
                'nombre_alu'=>$_POST['nombre'],
                'ap_pat_alu'=>$_POST['ap_pat'],
                'ap_mat_alu'=>$_POST['ap_mat'],
                'tipo_alu'=>$_POST['tipo'],
                'clave_unica_alu'=>$_POST['clave'],
                'correo_alu'=>$_POST['correo'],
                'contra_alu'=>$_POST['contra']
            );
            try{
                $reg = $tabla->create($datos);
                $res = array("result"=>"ok","msg"=>"Se guardo el usuario", "id"=>$reg);
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