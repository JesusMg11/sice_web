<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Authorization, Access-Control-Allow-Methods, Access-Control-Allow-Headers, Allow, Access-Control-Allow-Origin");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS, HEAD");
header("Allow: GET, POST, PUT, DELETE, OPTIONS, HEAD");
require_once 'database.php';
$tabla = new DataBase('inscripcion_grupo');
$conexion = new mysqli("localhost", "root", "", "siceapp");
switch($_SERVER['REQUEST_METHOD']){
    case "GET":
    break;
    case "POST":
        if(isset($_POST['clave_unica_alu']) && isset($_POST['id_gru'])){
            $sql = "SELECT count(*) as tot from inscripcion_grupo where id_alumno_ing = '".$_POST['clave_unica_alu']."' and id_grupo_ing=".$_POST['id_gru']; 
            $trow = $conexion -> query($sql);
            $row = mysqli_fetch_object($trow);
            $t= $row->tot;
            if($t == 0){
                $sql2 = "SELECT * from grupos where id_gru = ".$_POST['id_gru'];
                $exDatos = $conexion -> query($sql2);
                $datosGrupo = mysqli_fetch_array($exDatos);
                if($datosGrupo['lugares_gru']!=0){
                    $datos = array(
                        'id_ing' => 0,
                        'id_alumno_ing'=> strtoupper ( $_POST['clave_unica_alu']),
                        'id_grupo_ing'=>  $_POST['id_gru']
                    );
                  //  $query = "UPDATE grupos SET lugares_gru=(lugares_gru)-1 WHERE id_gru=".$_POST['id_gru'];
                  // $respuesta = $tabla -> query($query);
                 // $respuesta = $tabla -> update(array("data" => "lugares_gru=(lugares_gru)-1"), array("id_gru" => $_POST['id_gru']));
                 $sql3 = "UPDATE grupos SET lugares_gru=(lugares_gru)-1 WHERE id_gru=".$_POST['id_gru'];
                 $exActu = $conexion -> query($sql3);
                   try{
                    $reg = $tabla->create($datos);
                    $res = array("result"=>"ok","msg"=>"Se guardo el grupo", "id"=>$reg);
                 }catch(PDOException $e){
                    $res = array("result"=>"no","msg"=>$e->getMessage());
                 }
                }else{
                    $res = array("result"=>"no","msg"=>"Se guardo el grupo" );
                }
                
            }else{
                $res = array("result"=>"no","msg"=>"Se guardo el grupo" );
            }
        }else{
            $res = array("result"=>"no","msg"=>"Faltan datos");
        }
        header("HTTP/1.1 200 OK");
        echo json_encode($res);
    break;
}    