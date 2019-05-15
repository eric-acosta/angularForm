import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../service/persona.service';
import { Persona } from '../_model/persona';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  nombre: string;
  apellidos: string;
  edad: number;
  persona : Persona;
  dataSource: MatTableDataSource<Persona>;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  constructor(private personaService : PersonaService) { 
  
  }

  ngOnInit() {
    this.listar();
    
  }
listar(){
  this.personaService.listar().subscribe(data =>{
    this.dataSource = new MatTableDataSource(data);
  });
}

agregar(){
  let persona = new Persona();
  persona.nombre=this.nombre;
  persona.apellidos=this.apellidos;
  persona.edad=this.edad;
  console.log(persona);
  this.personaService.registrar(persona);

}


}
