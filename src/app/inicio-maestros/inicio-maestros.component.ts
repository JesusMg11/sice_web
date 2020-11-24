import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { RespuestaService } from '../respuesta.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-inicio-maestros',
  templateUrl: './inicio-maestros.component.html',
  styleUrls: ['./inicio-maestros.component.css']
})
export class InicioMaestrosComponent implements OnInit {

  datosUsuario ={usuario : '', password:''};

  volver(){
    this.router.navigate(['/inicio']);
  }

  entrar(){
    if(this.datosUsuario.usuario != '' || this.datosUsuario.usuario!= ''){
    this.datos.loginMaestros(this.datosUsuario.usuario, this.datosUsuario.password).subscribe(resp => {
       if(resp['auth']=='si'){
        this.datos.setCuenta(this.datosUsuario.usuario);
        this.router.navigate(['/maestros']);
      }else{
        swal.fire({
          icon: 'error',
          title: '¡Ups!',
          text: 'Las credenciales no coinciden.',
          timer:2000
        })
      }
    },error=>{
      swal.fire({
        icon: 'error',
        title: '¡Ups!',
        text: 'ERROR',
        timer:2000
      })
    })

  }else{
    swal.fire({
      icon: 'error',
      title: '¡Ups!',
      text: 'No debe haber campos vacíos',
      timer:2000
    })
  }
  }

  constructor(private router:Router, private datos: RespuestaService) { }

  ngOnInit(): void {
  }

}
