<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Authorization, Access-Control-Allow-Methods, Access-Control-Allow-Headers, Allow, Access-Control-Allow-Origin");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS, HEAD");
header("Allow: GET, POST, PUT, DELETE, OPTIONS, HEAD");
require_once 'database.php';
if($_SERVER['REQUEST_METHOD']=='GET'){
if(isset($_GET['user']) && isset($_GET['pass'])){
$usuario = $_GET['user'];
$contra = $_GET['pass'];
$users = new DataBase('alumnos');
$resultado = $users->read( array('clave_unica_alu'=>$usuario));
//echo json_encode($resultado['nombre_alu']);
if($resultado){
    if(password_verify($contra, $resultado['contra_alu'])){ // if de comprobar contraseñas
        if($resultado['clave_unica_alu'] == "ADMINISTRADOR"){
            $respuesta = array('auth' => 'admin', 'usuario' => $usuario);
        }else{
            $respuesta = array('auth' => 'si', 'usuario' => $usuario);
        }
    }else{
        $respuesta = array('auth' => 'no', 'usuario' => $usuario);
    }
    
}else{
    $respuesta = array('auth' => 'no', 'usuario' => $usuario);
}
echo json_encode($respuesta);
}else{
    $respuesta = array('auth' => 'no');
    echo json_encode($respuesta);
}
}