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
//$dat = $users -> sql_query("SELECT * FROM alumnos WHERE clave_unica_alu='".$usuario."'");
$resultado = $users->read( array('clave_unica_alu'=>$usuario, 'contra_alu'=>$contra));
if($resultado){
    $respuesta = array('auth' => 'si', 'usuario' => $usuario);
    
}else{
    $respuesta = array('auth' => 'no', 'usuario' => $usuario);
}
echo json_encode($respuesta);
}else{
    $respuesta = array('auth' => 'no');
}
}