import { Component, OnInit } from '@angular/core';
import { categoria }from 'src/app/interfaces/categoria';
import { CategoriaService }from 'src/app/services/crud/categoria.service';
@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  ArrayCategoria: categoria[];
  RutaImagenes :string;

  constructor(private categoriaSer: CategoriaService) { 
    this.RutaImagenes=this.categoriaSer.getRutaImg();
    this.categoriaSer.get().subscribe(
      (data:categoria[])=>{this.ArrayCategoria = data},
      (error)=>{alert("Ocurrió un error");}
    );
  }

  ngOnInit() {
  }
}
