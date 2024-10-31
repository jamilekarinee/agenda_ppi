import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../adiciona-contato/agenda.service';
import { Contato } from '../adiciona-contato/contato';

@Component({
  selector: 'app-exibe-contatos',
  templateUrl: './exibe-contatos.component.html',
  styleUrl: './exibe-contatos.component.css'
})
export class ExibeContatosComponent implements OnInit {
  agenda: any;
  constructor(private agendaService: AgendaService) {
  }

  ngOnInit(): void {
    this.agenda = this.agendaService.obterTodos()
  }
}
