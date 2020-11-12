import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

const URL:string = "http://localhost/ProyectoWeb/sice-app/src/servicios/";

@Injectable({
  providedIn: 'root'
})
export class RespuestaService {

  constructor(private http: HttpClient) { }

  
  private cuenta = {user:""};
  private user = {user:""};
  login(u, p){
    let Params = new HttpParams();
    Params = Params.append('user', u);
    Params = Params.append('pass', p);
    return this.http.get(URL + "logueo.php",{params:Params});
  }

  setCuenta(user){
    this.cuenta.user = user;
  }
  getCuenta(){
    this.user.user = this.cuenta.user;
    return this.user;
  }
  getUsusarios(u){
    let Params = new HttpParams();
    Params = Params.append('user', u);
    return this.http.get(URL + "alumnos.php", {params:Params});
  }
  postUsuario(alumno){
    let formData = new FormData();
    formData.append('nombre', alumno.nombre);
    formData.append('ap_pat', alumno.ap_pat);
    formData.append('ap_mat', alumno.ap_mat);
    formData.append('tipo', alumno.tipo);
    formData.append('clave', alumno.clave);
    formData.append('correo', alumno.correo);
    formData.append('contra', alumno.contra);

    return this.http.post(URL + "alumnos.php", formData);
  }

  postAviso(mensaje){
    let formData = new FormData();
    formData.append('mensaje', mensaje);
    return this.http.post(URL + "avisos.php", formData);
  }

  putAviso(msg){
    let Params = new HttpParams();
    Params = Params.append('id', msg.id);
    Params = Params.append('mensaje', msg.mensaje);

    return this.http.put(URL + "avisos.php", null, { params: Params});
  }

  deleteAviso(msg){
    let Params = new HttpParams();
    Params = Params.append('id', msg.id);
    return this.http.delete(URL + "avisos.php", { params: Params});
  }


  getAvisos(id){
    let Params = new HttpParams();
    Params = Params.append('id', id);
    return this.http.get(URL + 'avisos.php', {params: Params});
  }

  getDocentes(id){
    let Params = new HttpParams();
    Params = Params.append('id', id);
    return this.http.get(URL + 'docentes.php', {params: Params});
  }

  postDocente(maestro){
    let formData = new FormData();
    formData.append('nombre', maestro.nombre);
    formData.append('ap_pat', maestro.ap_pat);
    formData.append('ap_mat', maestro.ap_mat);
    formData.append('correo', maestro.correo);
    formData.append('telefono', maestro.telefono);
    formData.append('contra', maestro.contra);

    return this.http.post(URL + "docentes.php", formData);
  }

}
