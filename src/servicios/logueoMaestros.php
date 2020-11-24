<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Authorization, Access-Control-Allow-Methods, Access-Control-Allow-Headers, Allow, Access-Control-Allow-Origin");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS, HEAD");
header("Allow: GET, POST, PUT, DELETE, OPTIONS, HEAD");
require_once 'database.php';
if($_SERVER['REQUEST_METHOD']=='GET'){
if(isset($_GET['correo']) && isset($_GET['pass'])){
$usuario = $_GET['correo'];
$contra = $_GET['pass'];
$users = new DataBase('maestros');
$resultado = $users->read( array('correo_mae'=>$usuario));
//echo json_encode($resultado['nombre_alu']);
if($resultado){
    if(password_verify($contra, $resultado['contra_mae'])){ // if de comprobar contraseñas
            $respuesta = array('auth' => 'si', 'usuario' => $usuario);
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