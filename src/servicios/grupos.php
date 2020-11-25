<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Authorization, Access-Control-Allow-Methods, Access-Control-Allow-Headers, Allow, Access-Control-Allow-Origin");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS, HEAD");
header("Allow: GET, POST, PUT, DELETE, OPTIONS, HEAD");
require_once 'database.php';
$tabla = new DataBase('grupos');
switch($_SERVER['REQUEST_METHOD']){
    case "GET":
        if(isset($_GET['id'])){
           // $where = array('id_maestro_gru'=>$_GET['id_maestro']);
           // $res = $tabla->ReadAll($where);
           $query = "SELECT gr.id_gru, gr.nombre_gru, gr.periodo_gru, gr.anio_gru, gr.modalidad_gru, gr.lugares_gru, gr.id_maestro_gru, ma.nombre_mae, ma.ap_pat_mae, ma.ap_mat_mae
           from grupos as gr inner join maestros as ma on
           ma.id_mae = gr.id_maestro_gru";
          $res = $tabla -> query($query);
          // $res = $tabla->ReadAll();
        }else if(isset($_GET['bandera'])){
            $query = "SELECT * FROM grupos WHERE bandera_gru!='false'";
           $res = $tabla -> query($query);
        }else if(isset($_GET['id_maestro'])){
            // $where = array('id_maestro_gru'=>$_GET['id_maestro']);
           // $res = $tabla->ReadAll($where);
           $query = "SELECT gr.id_gru, gr.nombre_gru, gr.periodo_gru, gr.anio_gru, gr.modalidad_gru, gr.lugares_gru, gr.id_maestro_gru, ma.nombre_mae, ma.ap_pat_mae, ma.ap_mat_mae
           from grupos as gr inner join maestros as ma on
           ma.id_mae = gr.id_maestro_gru WHERE gr.id_maestro_gru = ".$_GET['id_maestro'];
          $res = $tabla -> query($query);
        }else if(isset($_GET['id_cal']) && isset($_GET['id_grupo'])){
            $query = "SELECT gr.id_gru, gr.nombre_gru, gr.periodo_gru, gr.anio_gru, gr.modalidad_gru, gr.lugares_gru, gr.id_maestro_gru, gr.bandera_gru, ig.id_ing, ig.id_alumno_ing, ig.id_grupo_ing,
            al.nombre_alu, al.ap_pat_alu, al.ap_mat_alu, al.correo_alu, c.cal1_cc, c.cal2_cc
            from grupos as gr inner join inscripcion_grupo as ig on gr.id_gru = ig.id_grupo_ing 
            inner join alumnos as al on  al.clave_unica_alu = ig.id_alumno_ing
            inner join cargar_calificaciones as c on al.clave_unica_alu = c.clave_alu_cc
            where gr.id_maestro_gru = ".$_GET['id_cal']." and gr.id_gru =".$_GET['id_grupo'];
          $res = $tabla -> query($query);
        }else if(isset($_GET['clave_alu'])){
            $query = "SELECT gr.id_gru, gr.nombre_gru, gr.periodo_gru, gr.anio_gru, gr.modalidad_gru, gr.lugares_gru, gr.id_maestro_gru, gr.bandera_gru, ig.id_ing, ig.id_alumno_ing, ig.id_grupo_ing,
            al.nombre_alu, al.ap_pat_alu, al.ap_mat_alu, al.correo_alu, c.cal1_cc, c.cal2_cc, ma.nombre_mae, ma.ap_pat_mae, ma.ap_mat_mae, ma.telefono_mae, ma.correo_mae
            from grupos as gr inner join inscripcion_grupo as ig on gr.id_gru = ig.id_grupo_ing 
            inner join alumnos as al on  al.clave_unica_alu = ig.id_alumno_ing
            inner join cargar_calificaciones as c on al.clave_unica_alu = c.clave_alu_cc
            inner join maestros as ma on
            ma.id_mae = gr.id_maestro_gru
            where ig.id_alumno_ing = '".$_GET['clave_alu']."'";
          $res = $tabla -> query($query);
        }else{

        }
        header("HTTP/1.1 200 OK");
        echo json_encode($res);
    break;
    case "POST":
        if(isset($_POST['nombre']) && isset($_POST['periodo']) && isset($_POST['anio']) && isset($_POST['modalidad']) && isset($_POST['lugares'])
        && isset($_POST['id_maestro'])){
            $bandera = "true";
            $datos = array(
                'id_gru' => 0,
                'nombre_gru'=> strtoupper ( $_POST['nombre']),
                'periodo_gru'=> strtoupper ( $_POST['periodo']),
                'anio_gru'=>  $_POST['anio'],
                'modalidad_gru'=>strtoupper ( $_POST['modalidad']),
                'lugares_gru'=> $_POST['lugares'],
                'id_maestro_gru'=> $_POST['id_maestro'],
                'bandera_gru' => $bandera
            );
            try{
                $reg = $tabla->create($datos);
                $res = array("result"=>"ok","msg"=>"Se guardo el grupo", "id"=>$reg);
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