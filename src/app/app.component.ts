import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  title = 'sice-app';
  opened = false;
  inicio(){
    this.router.navigate(['/estudiantes']);
    
  }

  constructor( private router:Router) {

  }

  ngOnInit(): void {
  }
}
