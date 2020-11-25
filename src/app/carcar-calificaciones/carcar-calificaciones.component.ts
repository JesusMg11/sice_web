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
  opened = false;
  alumnosGrupo : any;

  inicio(){
    this.router.navigate(['/maestros']);
  }
  calificaciones(){
    this.router.navigate(['/calificacionesMaestros']);
  }
  salir (){
this.router.navigate(['/inicio']);
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

  constructor(private router:Router, private datos: RespuestaService) { }

  ngOnInit(): void {
    this.obtenerGrupo();
  }

}
