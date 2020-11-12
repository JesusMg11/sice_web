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

  constructor(private router:Router, private datos:RespuestaService) { }

  ngOnInit(): void {
  }

}
