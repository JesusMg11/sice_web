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
  private docente = {id:""};
  private clave = {id:""};
  private grupo = {clave:""};
  private claveGrupo = {clave:""};
  login(u, p){
    let Params = new HttpParams();
    Params = Params.append('user', u);
    Params = Params.append('pass', p);
    return this.http.get(URL + "logueo.php",{params:Params});
  }

  loginMaestros(u, p){
    let Params = new HttpParams();
    Params = Params.append('correo', u);
    Params = Params.append('pass', p);
    return this.http.get(URL + "logueoMaestros.php",{params:Params});
  }

  setCuenta(user){
    this.cuenta.user = user;
  }

  setGrupo(gr){
    this.grupo.clave = gr;
  }

  setDocente(clave){
    this.docente.id = clave;
  }

  getClaveDocente(){
    this.clave.id = this.docente.id;
    return this.clave;
  }

  getCuenta(){
    this.user.user = this.cuenta.user;
    return this.user;
  }

  getClaveGrupo(){
    this.claveGrupo.clave = this.grupo.clave;
    return this.claveGrupo;
  }

  getUsusarios(u){
    let Params = new HttpParams();
    Params = Params.append('user', u);
    return this.http.get(URL + "alumnos.php", {params:Params});
  }
  getAlumnos(u){
    let Params = new HttpParams();
    Params = Params.append('alu', u);
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

  getOnlyDocente(correo){
    let Params = new HttpParams();
    Params = Params.append('correo_mae', correo);
    return this.http.get(URL + 'docentes.php', {params: Params});
  }

  getOnlyIdDocente(correo){
    let Params = new HttpParams();
    Params = Params.append('soloId', correo);
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

  postGrupo(grupo){
    let formData = new FormData();
    formData.append('nombre', grupo.nombre);
    formData.append('periodo', grupo.periodo);
    formData.append('modalidad', grupo.modalidad);
    formData.append('anio', grupo.anio);
    formData.append('lugares', grupo.lugares);
    formData.append('id_maestro', grupo.id_maestro);

    return this.http.post(URL + "grupos.php", formData);
  }

  getGrupos(id){
    let Params = new HttpParams();
    Params = Params.append('id', id);
    return this.http.get(URL + 'grupos.php', {params: Params});
  }

  getGruposDocente(id){
    let Params = new HttpParams();
    Params = Params.append('id_maestro', id);
    return this.http.get(URL + 'grupos.php', {params: Params});
  }

  getGruposCal(id, grupo){
    let Params = new HttpParams();
    Params = Params.append('id_cal', id);
    Params = Params.append('id_grupo', grupo);
    return this.http.get(URL + 'grupos.php', {params: Params});
  }

  getGruposBandera(id){
    let Params = new HttpParams();
    Params = Params.append('bandera', id);
    return this.http.get(URL + 'grupos.php', {params: Params});
  }

  postInscripcionGrupo(datos){
    let formData = new FormData();
    formData.append('clave_unica_alu', datos.id_alumno);
    formData.append('id_gru',datos.id_grupo);

    return this.http.post(URL + "inscripcionGrupo.php", formData);
  }

}
