import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutosService } from '../autos.service';

@Component({
  selector: 'app-listar-autos',
  templateUrl: './listar-autos.component.html',
  styleUrls: ['./listar-autos.component.css']
})
export class ListarAutosComponent implements OnInit {

  constructor(private router:Router, private auto:AutosService) { }

  listaIni:any = []
  lista:any = []
  autoMarca: any=''

  ngOnInit(): void {
    this.auto.listarAutos().subscribe(
      (res)=>{
        this.lista=res
        this.listaIni=res
      },
      (err)=>{
        console.log(err)
      }
    )
  }

  eliminar (autoSelect:any){
    this.auto.eliminarAuto(autoSelect).subscribe(
      (res)=>{
        const index = this.lista.indexof(autoSelect)
        if (index> -1){
          this.lista.splice(index,1);
        }
      },
      (err)=>{
        console.log(err)
      }
    )
  }

  filtrar(){
    if(!this.autoMarca.length){
      this.lista = this.listaIni
    } else {
      this.lista = this.listaIni.filter((list: { marca: string | any[]; }) => list.marca.includes(this.autoMarca))
    }

  }

}
