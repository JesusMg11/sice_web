import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { RespuestaService } from '../respuesta.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-calificaciones-maestros',
  templateUrl: './calificaciones-maestros.component.html',
  styleUrls: ['./calificaciones-maestros.component.css']
})
export class CalificacionesMaestrosComponent implements OnInit {

  opened = false;
  cargar = true;
  maestro = this.datos.getCuenta().user;
  docente: any ;
  grupo: any;
  id_docente:any;
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
  cargarCalificacion(grupo){
    this.datos.setGrupo(grupo);
    this.router.navigate(['/cargar']);
  }

  tmpId(id){
    console.log("EL ID DE ESTA PORQUERIA: "+id);
    this.id_docente = id;
    this.datos.setDocente(id);
    this.obtenerGrupo();
  }

  obtenerGrupo(){
   // console.log(this.id_docente)
    this.datos.getGruposDocente(this.id_docente).subscribe(res=>{
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

  datosDocente(){
    this.datos.getOnlyIdDocente(this.maestro).subscribe(resp => {
      this.docente = resp;
    //  console.log("ID DE REPUESTA: "+resp['id_mae']);
    }, error => {
      console.log(error);
      if(error.status==408) this.router.navigate(['']);
    })
  }

  constructor(private router:Router, private datos: RespuestaService) { 
  

  }

  ngOnInit(): void {
    this.datosDocente();
   // this.obtenerGrupo();
  }

}
