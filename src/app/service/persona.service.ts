import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../_model/persona';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http:HttpClient) { }

  listar(){
    return this.http.get<Persona[]>('http://localhost:3001/personas');
  }
  listarPorId(persona:Persona){
    return this.http.get<Persona[]>('http://localhost:3001/personas'+persona.id);
  }
  registrar(persona:Persona){
    return this.http.post('http://localhost:3001/personas',persona);

  }
  modificar(persona:Persona){
    return this.http.put('http://localhost:3001/personas',persona);

  }
  eliminar(persona:Persona){
    return this.http.delete('http://localhost:3001/personas/'+persona.id);

  }
}
