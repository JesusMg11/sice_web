import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { RespuestaService } from '../respuesta.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-maestros-admin',
  templateUrl: './maestros-admin.component.html',
  styleUrls: ['./maestros-admin.component.css']
})
export class MaestrosAdminComponent implements OnInit {

  maestro: any;
  gru: any;
  grupo: any;
  ItemsArray= [];
  nuevoMaestro = {nombre:'', ap_pat:'', ap_mat:'', correo:'', telefono:'', contra:''};
  opened = false;

  salir (){
    this.router.navigate(['/inicio']);
      }

  docentes(){
    this.router.navigate(['/maestrosAdmin']);
  }

  inicio(){
    this.router.navigate(['/admin']);
  }
  avisos(){
    this.router.navigate(['/avisos']);
  }
  grupos(){
    this.router.navigate(['/grupos']);
  }
  alum(){
    this.router.navigate(['/estudiantesAdmin']);
  }



  agregar(){
    if(this.nuevoMaestro.nombre != '' || this.nuevoMaestro.ap_pat != '' || this.nuevoMaestro.ap_mat != '' || this.nuevoMaestro.correo != ''
    || this.nuevoMaestro.telefono != '' || this.nuevoMaestro.contra != ''){

      this.datos.postDocente(this.nuevoMaestro).subscribe(resp => {
        if(resp['result']=='ok'){
          this.obtenerDocentes();
          this.nuevoMaestro.nombre = '';
          this.nuevoMaestro.ap_pat = '';
          this.nuevoMaestro.ap_mat = '';
          this.nuevoMaestro.telefono = '';
          this.nuevoMaestro.correo = '';
          this.nuevoMaestro.contra = '';
          swal.fire({
            icon: 'success',
            title: '¡Hecho!',
            text: 'Se ha guardado con éxito el docente',
            timer: 2000
          })
        }else{
          swal.fire({
            icon: 'error',
            title: '¡Ups!',
            text: 'El docente no se ha podido guardar',
            timer:2000
          })
        }
      }, error => {
        console.log(error);
      });

    }else{
      swal.fire({
        icon: 'error',
        title: '¡Ups!',
        text: 'No puede haber campos vacíos',
        timer:2000
      })
    }

  }

  obtenerDocentes(){
    //this.datos.getDocentes("0").subscribe((res: any[])=>{
      this.datos.getDocentes("0").subscribe(res=>{
      this.maestro = res;
    }, error => {
      swal.fire({
        icon: 'error',
        title: '¡Ups!',
        text: 'No hay docentes aún',
        timer:2000
      })
    })
  }

  obtenerGrupo(){
    this.datos.getGrupos("0").subscribe(res=>{
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

 
 

  constructor(private router:Router, private datos:RespuestaService) { }

  ngOnInit(): void {
    this.obtenerDocentes();
  }

}
