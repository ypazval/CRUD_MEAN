import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AutosService {

  constructor(private http: HttpClient) { } 
  private urlGeneral = 'http://localhost:3000/api/auto/';

  crearAuto(auto:any){
    return this.http.post<any>(this.urlGeneral,auto)
  }

  editarAuto(auto:any){
    return this.http.put<any>(this.urlGeneral,auto)
  }

  listarAutos(){
    return this.http.get<any>(this.urlGeneral+'listaAutos/')
  }

  eliminarAuto(auto:any){
    return this.http.delete<any>(this.urlGeneral+auto._id)
  }

}
