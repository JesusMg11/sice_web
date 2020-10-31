import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { RespuestaService } from '../respuesta.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {
  usuario:any;
  avisos:any;
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
  
  constructor(private router:Router, private datos: RespuestaService) { }

  ngOnInit(): void {
    this.datosUsuario();
  }

}
