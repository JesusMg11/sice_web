import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { RespuestaService } from '../respuesta.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-alumnos-admin',
  templateUrl: './alumnos-admin.component.html',
  styleUrls: ['./alumnos-admin.component.css']
})
export class AlumnosAdminComponent implements OnInit {

  opened = false
  usuario: any;
  pos: any;
  nuevaInscripcion = {id_grupo:"", id_alumno:""};
  grupo: any;
  cad : any;
  prueba = "";
  aItem = [];
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
  grupos(){
    this.router.navigate(['/grupos']);
  }
  alum(){
    this.router.navigate(['/estudiantesAdmin']);
  }

  datosUsuario(){
    this.datos.getAlumnos("0").subscribe(resp => {
      this.usuario = resp;
    }, error => {
      console.log(error);
      if(error.status==408) this.router.navigate(['']);
    })
  }

  datosGrupo(grup){
    this.aItem = grup;
  }

  obtAlumno(clave){
    this.nuevaInscripcion.id_alumno = clave;
  }

  inscribir(){
     this.nuevaInscripcion.id_grupo.split(" ");
     this.pos = this.nuevaInscripcion.id_grupo[0] 
     this.nuevaInscripcion.id_grupo = this.pos;
    // console.log("ARREGLO A MANDAR. ID GRUPO: "+this.nuevaInscripcion.id_grupo+", ID ALUMNO: "+this.nuevaInscripcion.id_alumno);
    if(this.nuevaInscripcion.id_alumno != "" || this.nuevaInscripcion.id_grupo != ""){
      this.datos.postInscripcionGrupo(this.nuevaInscripcion).subscribe(resp => {
        if(resp['result']=='ok'){
          this.datosUsuario();
          this.nuevaInscripcion.id_alumno = '';
          this.nuevaInscripcion.id_grupo = '';
          swal.fire({
            icon: 'success',
            title: '¡Hecho!',
            text: 'Se ha inscrito con éxito',
            timer: 2000
          })
        }else{
          swal.fire({
            icon: 'error',
            title: '¡Ups!',
            text: 'Inscripción no realizada',
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

  obtenerGrupo(){
    this.datos.getGruposBandera("0").subscribe(res=>{
  //  this.datos.getGruposBandera("0").subscribe((res: any[])=>{
  //    this.aItem = res;
  this.grupo = res;
  //console.log(res["nombre_gru"]);
     // this.prueba = res["nombre_gru"];
    }, error => {
      swal.fire({
        icon: 'error',
        title: '¡Ups!',
        text: 'No hay grupos aún',
        timer:2000
      })
    })
    console.log(this.grupo);
  }
  constructor(private router:Router, private datos:RespuestaService) {
    
   }

  ngOnInit(): void {
    this.datosUsuario();
    this.obtenerGrupo();
    //SCRIPT PARA BUSCADOR
    (function(document) {
      'use strict';
      var LightTableFilter = (function(Arr) {
        var _input;
      function _onInputEvent(e) {
          _input = e.target;
          var tables = document.getElementsByClassName(_input.getAttribute('data-table'));
          Arr.forEach.call(tables, function(table) {
            Arr.forEach.call(table.tBodies, function(tbody) {
              Arr.forEach.call(tbody.rows, _filter);
            });
          });
        }

        function _filter(row) {
          var text = row.textContent.toLowerCase(), val = _input.value.toLowerCase();
          row.style.display = text.indexOf(val) === -1 ? 'none' : 'table-row';
        }

        return {
          init: function() {
            var inputs = document.getElementsByClassName('light-table-filter');
            Arr.forEach.call(inputs, function(input) {
              input.oninput = _onInputEvent;
            });
          }
        };
      })(Array.prototype);

      document.addEventListener('readystatechange', function() {
        if (document.readyState === 'complete') {
          LightTableFilter.init();
        }
      });

    })(document);

    //FIN SCRIPT
  }

}
