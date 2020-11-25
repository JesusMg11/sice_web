import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { RespuestaService } from '../respuesta.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.component.html',
  styleUrls: ['./calificaciones.component.css']
})
export class CalificacionesComponent implements OnInit {

  opened = false;
  estudiante = this.datos.getCuenta().user;
  grupo:any;
  inicio(){
    this.router.navigate(['/estudiantes']);
  }
  calificaciones(){
    this.router.navigate(['/calificaciones']);
  }
  salir (){
    this.router.navigate(['/inicio']);
  }
  info(){
    this.router.navigate(['/informacion']);
  }

  obtenerGrupo(){
    // console.log(this.id_docente)
     this.datos.getGrupoAlumno(this.estudiante).subscribe(res=>{
       this.grupo = res;
     }, error => {
       swal.fire({
         icon: 'error',
         title: '¡Ups!',
         text: 'No hay grupos aún',
         timer:2000
       })
     })
 
   }
  constructor(private router:Router, private datos: RespuestaService) {

  }

  ngOnInit(): void {
    this.obtenerGrupo();
  }

}
