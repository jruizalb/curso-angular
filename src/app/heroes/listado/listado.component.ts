import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {

  heroes:string[]=['spiderman', 'batman', 'hulk','joker' ];
  heroesBorrados:string[]=[];
  borrarHeroe(){
    this.heroesBorrados.push(this.heroes[0]);
     this.heroes.shift();
  }
}
