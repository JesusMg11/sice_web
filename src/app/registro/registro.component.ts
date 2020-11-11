import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { RespuestaService } from '../respuesta.service';
import swal from 'sweetalert2';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  conTemp = {con:''};
  nuevoAlumno = {nombre:'', ap_pat:'', ap_mat:'', tipo:'', clave:'', correo:'', contra:'', conTemp:''};
  
  tipos = [
    {id: 1, name:'ESTUDIANTE'},
    {id: 2, name:'EXTERNO'}
  ];
  selectedTiposName = 'ESTUDIANTE';
  inicio(){
    this.router.navigate(['/inicio']);
  }

  registrar(){
    if(this.nuevoAlumno.nombre == '' || this.nuevoAlumno.ap_pat == '' || this.nuevoAlumno.ap_mat == '' || this.nuevoAlumno.tipo == ''
    && this.nuevoAlumno.clave == '' || this.nuevoAlumno.correo == '' || this.nuevoAlumno.contra == ''){
      swal.fire({
        icon: 'error',
        title: '¡Ups!',
        text: 'No puede haber campos vacíos',
        timer:2000
      })
    }else{
    this.datos.postUsuario(this.nuevoAlumno).subscribe(resp => {
      if(resp['result']=='ok'){
        this.nuevoAlumno.nombre = '';
        this.nuevoAlumno.ap_pat = '';
        this.nuevoAlumno.ap_mat = '';
        this.nuevoAlumno.tipo = 'ESTUDIANTE';
        this.nuevoAlumno.clave = '';
        this.nuevoAlumno.correo = '';
        this.nuevoAlumno.contra = '';
        this.nuevoAlumno.conTemp = '';
        swal.fire({
          icon: 'success',
          title: '¡Hecho!',
          text: 'Se ha guardado con éxito el alumno',
          timer: 2000
        })
      }else{
        swal.fire({
          icon: 'error',
          title: '¡Ups!',
          text: 'El usuario no se ha podido guardar',
          timer:2000
        })
      }
    }, error => {
      console.log(error);
    });
  }
}

  constructor(private router:Router, private datos:RespuestaService) { }

  ngOnInit(): void {
  }

}
