import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.component.html',
  styleUrls: ['./calificaciones.component.css']
})
export class CalificacionesComponent implements OnInit {

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
  constructor( private router:Router) {

  }


  ngOnInit(): void {
  }

}
