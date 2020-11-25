import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { RespuestaService } from '../respuesta.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-carcar-calificaciones',
  templateUrl: './carcar-calificaciones.component.html',
  styleUrls: ['./carcar-calificaciones.component.css']
})
export class CarcarCalificacionesComponent implements OnInit {

  claveDocente = this.datos.getClaveDocente().id;
  claveGrupo = this.datos.getClaveGrupo().clave;
  claveAlumnoTemp:  any;
  opened = false;
  alumnosGrupo : any;
  nuevaCalificacion = {id_grupo:"", clave_alu:"", cal1:0, cal2:0};

  inicio(){
    this.router.navigate(['/maestros']);
  }
  calificaciones(){
    this.router.navigate(['/calificacionesMaestros']);
  }
  salir (){
this.router.navigate(['/inicio']);
  }
  informacion(){
    this.router.navigate(['/informacionMaestros']);
  }

  obtAlumno(clave_alu, cal1, cal2){
    this.claveAlumnoTemp = clave_alu;
    this.nuevaCalificacion.cal1 = cal1;
    this.nuevaCalificacion.cal2 = cal2;
  }

  obtenerGrupo(){
    // console.log(this.id_docente)
     this.datos.getGruposCal(this.claveDocente, this.claveGrupo).subscribe(res=>{
       this.alumnosGrupo = res;
     }, error => {
       swal.fire({
         icon: 'error',
         title: '¡Ups!',
         text: 'No hay grupos aún',
         timer:2000
       })
     })
 
   }

   inscripcion(){
    // if(this.nuevaCalificacion.cal1 != "" && this.nuevaCalificacion.cal2 != ""){
      if((this.nuevaCalificacion.cal1 > 100 || this.nuevaCalificacion.cal1 < 0) || (this.nuevaCalificacion.cal2 > 100 || this.nuevaCalificacion.cal2 < 0)){
        swal.fire({
          icon: 'error',
          title: '¡Ups!',
          text: 'Solo se admiten calificaciones de 0 a 100',
          timer:2000
        })
      }else{
        this.nuevaCalificacion.clave_alu = this.claveAlumnoTemp;
      this.nuevaCalificacion.id_grupo = this.claveGrupo;
      this.datos.postNota(this.nuevaCalificacion).subscribe(resp => {
        if(resp['result']=='ok'){
      this.nuevaCalificacion.cal1 = 0;
      this.nuevaCalificacion.cal2 = 0;
      this.nuevaCalificacion.clave_alu = "";
      this.nuevaCalificacion.id_grupo = "";
      this.obtenerGrupo();
          swal.fire({
            icon: 'success',
            title: '¡Hecho!',
            text: 'Calificaciones agregadas con éxito.',
            timer: 2000
          })
        }else{
          swal.fire({
            icon: 'error',
            title: '¡Ups!',
            text: 'Error al subir las calificaciones.',
            timer:2000
          })
        }
      }, error => {
        console.log(error);
      });
      
      }
   }

  constructor(private router:Router, private datos: RespuestaService) { }

  ngOnInit(): void {
    this.obtenerGrupo();
  }

}
