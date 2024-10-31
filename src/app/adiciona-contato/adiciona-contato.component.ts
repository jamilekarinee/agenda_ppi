import { Component } from '@angular/core';
import { TipoContato } from './tipocontato';
import { Contato } from './contato';

@Component({
  selector: 'app-adiciona-contato',
  templateUrl: './adiciona-contato.component.html',
  styleUrl: './adiciona-contato.component.scss'
})
export class AdicionaContatoComponent {
  tipos: string[]
  contatos: Contato[]
  favoritos: any
agenda: any;
  constructor() {
    this.tipos = Object.values(TipoContato)
    this.contatos = []
    this.favoritos = []; 
  }

  adicionar(nome: string, telefone:string, email: string, aniversario: string, tipo: string, fav: boolean) {
    let pessoa = new Contato(nome, telefone, email, aniversario, this.getTipo(tipo), fav)
    this.contatos.push(pessoa)
  }

  getTipo(str: string): TipoContato {
    let tp: TipoContato = TipoContato.AMIGO

    if (str === TipoContato.AMIGO) { 
      tp = TipoContato.AMIGO
    } //else if ...
    else if(str === TipoContato.FAMILIA){
      tp = TipoContato.FAMILIA
    }
    else if(str === TipoContato.TRABALHO){
      tp = TipoContato.TRABALHO
    }
    else if(str === TipoContato.OUTRO){
      tp = TipoContato.OUTRO
    }
    return tp; 
  }
}
