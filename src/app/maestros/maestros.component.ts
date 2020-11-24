import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { RespuestaService } from '../respuesta.service';
import swal from 'sweetalert2';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-maestros',
  templateUrl: './maestros.component.html',
  styleUrls: ['./maestros.component.css']
})
export class MaestrosComponent implements OnInit {

  opened = false;
  maestro = this.datos.getCuenta().user;
  docente: any;
  avisos:any;

  inicio(){
    this.router.navigate(['/maestros']);
  }
  salir (){
this.router.navigate(['/inicio']);
  }

  datosDocente(){
    this.datos.getOnlyDocente(this.maestro).subscribe(resp => {
      this.docente = resp;
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


  constructor(private router:Router, private datos: RespuestaService) { }

  ngOnInit(): void {
    this.datosDocente();
    this.obtenerAvisos();
  }

}
