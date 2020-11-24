import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { RespuestaService } from '../respuesta.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit {

  opened = false;
  grupo: any;
  nuevoGrupo = {nombre:"", periodo:"FEB-JUN", anio:"2000", modalidad:"ESCOLARIZADO", lugares:"", id_maestro:""};
  years = [];

llenarArray(){
  console.log(this.years);
}

  periodo = [
      { name:'FEB-JUN'},
      { name:'AGO-DIC'},
      { name:'INVIERNO'},
      { name:'VERANO'}
  ];

  modalidad = [
    { name:'ESCOLARIZADO'},
    { name:'SABATINO'}
];

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
    if(this.nuevoGrupo.nombre != '' // || this.nuevoGrupo.periodo != '' || this.nuevoGrupo.anio != '' || this.nuevoGrupo.modalidad != ''
    || this.nuevoGrupo.lugares != '' || this.nuevoGrupo.id_maestro != ''){
      this.datos.postGrupo(this.nuevoGrupo).subscribe(resp => {
        if(resp['result']=='ok'){
          this.obtenerGrupo();
          this.nuevoGrupo.nombre = '';
          this.nuevoGrupo.periodo = '';
          this.nuevoGrupo.anio = '';
          this.nuevoGrupo.modalidad = '';
          this.nuevoGrupo.lugares = '';
          this.nuevoGrupo.id_maestro = '';
          swal.fire({
            icon: 'success',
            title: '¡Hecho!',
            text: 'Se ha guardado con éxito el grupo',
            timer: 2000
          })
        }else{
          swal.fire({
            icon: 'error',
            title: '¡Ups!',
            text: 'El grupo no se ha podido guardar',
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

  constructor(private router:Router, private datos:RespuestaService) {
    this.crearAnios();
   }

   
   private crearAnios() {
    for (let index = 0; index <= 99; index++) {
      this.years[index]= 2000+index; 
    }
}

  ngOnInit(): void {
    this.llenarArray();
    this.obtenerGrupo();
  }

}
