import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Nota {
  id: number;
  titulo: string
  descripcion: string
  fecha_creacion: string
}

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  private apiUrl = 'http://127.0.0.1:8000'; 

  constructor(private http: HttpClient) { }



  getNotas(): Observable<{notas: Nota[]}> {
    return this.http.get<{notas: Nota[]}>(`${this.apiUrl}/notas/`);
  }

  getNotaById(nota_id: number): Observable<Nota> {
    return this.http.get<Nota>(`${this.apiUrl}/notas/${nota_id}`);
  }
  

  crearNota(nota: Omit<Nota, 'id'>): Observable<any> {
    return this.http.post(`${this.apiUrl}/notas/`, nota);
  }

  deleteNota(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/notas/${id}`);
  }

  editarNota(id: number, titulo: string, descripcion: string): Observable<any> {
    let params = new HttpParams();
    if (titulo) {
      params = params.set('titulo', titulo);
    }
    if (descripcion) {
      params = params.set('descripcion', descripcion);
    }

    return this.http.put(`${this.apiUrl}/notas/${id}`, null, { params });
  }
  
}
