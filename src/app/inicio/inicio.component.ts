import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { RespuestaService } from '../respuesta.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  datosUsuario ={usuario : '', password:''};
  login(){
    if(this.datosUsuario.usuario != '' || this.datosUsuario.usuario!= ''){
      this.router.navigate(['/estudiantes']);
    }else{
      swal.fire({
        icon: 'error',
        title: '¡Ups!',
        text: 'No debe haber campos vacíos',
        timer:2000
      })
    }
  }

  entrar(){
    if(this.datosUsuario.usuario != '' || this.datosUsuario.usuario!= ''){
    this.datos.login(this.datosUsuario.usuario, this.datosUsuario.password).subscribe(resp => {
      if(resp['auth']=='si'){
        this.datos.setCuenta(this.datosUsuario.usuario);
        this.router.navigate(['/estudiantes']);
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

  registro(){
    this.router.navigate(['/registro']);
  }
  constructor(private router:Router, private datos: RespuestaService ) { 

  }

  ngOnInit(): void {
  }

}
