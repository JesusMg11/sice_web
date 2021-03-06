import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { RespuestaService } from '../respuesta.service';
import swal from 'sweetalert2';
import { DataSource } from '@angular/cdk/table';
@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {
 avisos:any;
 usuario:any;
 estudiante = this.datos.getCuenta().user;
  opened = false;
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
  datosUsuario(){
    this.datos.getUsusarios(this.estudiante).subscribe(resp => {
      this.usuario = resp;
    }, error => {
      console.log(error);
      if(error.status==408) this.router.navigate(['']);
    })
  }

  obtenerAvisos(){
    this.datos.getAvisos("0").subscribe(resp=>{
      this.avisos = resp;
    }, error => {
      swal.fire({
        icon: 'error',
        title: '¡Ups!',
        text: 'No hay avisos',
        timer:2000
      })
    })
  }
  constructor( private router:Router, private datos:RespuestaService) {

  }

  ngOnInit(): void {
    this.datosUsuario();
    this.obtenerAvisos();
  }

}
