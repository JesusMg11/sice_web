import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { RespuestaService } from '../respuesta.service';
import swal from 'sweetalert2';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public Editor = ClassicEditor;
  avisos : any;
  opened = false

  salir (){
    this.router.navigate(['/inicio']);
      }

  docentes(){
    this.router.navigate(['/maestrosAdmin']);
  }

  inicio(){
    this.router.navigate(['/admin']);
  }
  aviso(){
    this.router.navigate(['/avisos']);
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


  constructor( private router:Router, private datos:RespuestaService) { }

  ngOnInit( ): void {
    this.obtenerAvisos();
  }

}
