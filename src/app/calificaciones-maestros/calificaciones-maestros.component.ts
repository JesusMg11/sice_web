import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { RespuestaService } from '../respuesta.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-calificaciones-maestros',
  templateUrl: './calificaciones-maestros.component.html',
  styleUrls: ['./calificaciones-maestros.component.css']
})
export class CalificacionesMaestrosComponent implements OnInit {

  constructor(private router:Router, private datos: RespuestaService) { }

  ngOnInit(): void {
  }

}
