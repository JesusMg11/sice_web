import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { RespuestaService } from '../respuesta.service';
import swal from 'sweetalert2';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-avisos',
  templateUrl: './avisos.component.html',
  styleUrls: ['./avisos.component.css']
})
export class AvisosComponent implements OnInit {

  public Editor = ClassicEditor;
  public EditorMod = ClassicEditor;
  opened = false;
  mensajes: any;
  nuevoMsg = {mensaje:""};
  modMsg = {id:"",mensaje:""};

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

  agregarAviso(){

    if(this.nuevoMsg.mensaje != '' ){

      this.datos.postAviso(this.nuevoMsg.mensaje).subscribe(resp => {
        if(resp['result']=='ok'){
          this.nuevoMsg.mensaje = '';
          this.obtenerAvisos();
          swal.fire({
            icon: 'success',
            title: '¡Hecho!',
            text: 'Se ha guardado con éxito el aviso',
            timer: 2000
          })
        }else{
          swal.fire({
            icon: 'error',
            title: '¡Ups!',
            text: 'El aviso no se ha podido guardar',
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

  eliminar(mnsj){
    swal.fire({
      title: '¿ELIMINAR AVISO?',
      showDenyButton: true,
      confirmButtonText: `ELIMINAR`,
      denyButtonText: `CANCELAR`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.modMsg.id = mnsj.id_avi;
        this.modMsg.mensaje = mnsj.mensaje_avi;
        this.datos.deleteAviso(this.modMsg).subscribe(resp => {
          if(resp['result']=='ok'){
            this.obtenerAvisos();
            swal.fire({
              icon: 'success',
              title: '¡Hecho!',
              text: 'Se ha eliminado con éxito el aviso',
              timer: 2000
            })
          }else{
            swal.fire({
              icon: 'error',
              title: '¡Ups!',
              text: 'El aviso no se ha podido eliminar',
              timer:2000
            })
          }
        }, error => {
          console.log(error);
        });
        
      } else if (result.isDenied) {
        swal.fire('AVISO A SALVO', '', 'info')
      }
    })
  }

  temporalAviso(mnsj){
    this.modMsg.mensaje = mnsj.mensaje_avi;
    this.modMsg.id = mnsj.id_avi;
  }

  obtenerAvisos(){
    this.datos.getAvisos("0").subscribe(resp=>{
      this.mensajes = resp;
    }, error => {
      swal.fire({
        icon: 'error',
        title: '¡Ups!',
        text: 'No hay avisos',
        timer:2000
      })
    })
  }

  updAviso(){
    this.datos.putAviso(this.modMsg).subscribe(resp => {
      if(resp['result']=='ok'){
        this.obtenerAvisos();
        swal.fire({
          icon: 'success',
          title: '¡Hecho!',
          text: 'Se ha actualizado con éxito el aviso',
          timer: 2000
        })
      }else{
        swal.fire({
          icon: 'error',
          title: '¡Ups!',
          text: 'El aviso no se ha podido actualizar',
          timer:2000
        })
      }
    }, error => {
      console.log(error);
    });
  }


  constructor(private router:Router, private datos:RespuestaService) { }

  ngOnInit(): void {
    this.obtenerAvisos();
  }

}
