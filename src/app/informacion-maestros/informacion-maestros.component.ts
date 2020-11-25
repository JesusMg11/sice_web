import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { RespuestaService } from '../respuesta.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-informacion-maestros',
  templateUrl: './informacion-maestros.component.html',
  styleUrls: ['./informacion-maestros.component.css']
})
export class InformacionMaestrosComponent implements OnInit {

  opened = false;
  maestro = this.datos.getCuenta().user;
  docente: any;

  inicio(){
    this.router.navigate(['/maestros']);
  }
  salir (){
this.router.navigate(['/inicio']);
  }
  calificaciones(){
    this.router.navigate(['/calificacionesMaestros']);
  }
  informacion(){
    this.router.navigate(['/informacionMaestros']);
  }
  datosDocente(){
    this.datos.getOnlyDocente(this.maestro).subscribe(resp => {
      this.docente = resp;
    }, error => {
      console.log(error);
      if(error.status==408) this.router.navigate(['']);
    })
  }

  constructor(private router:Router, private datos: RespuestaService) { }

  ngOnInit(): void {
    this.datosDocente();
  }

}
