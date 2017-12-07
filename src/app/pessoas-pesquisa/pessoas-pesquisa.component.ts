import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent {

  pessoas = [
    { nome: 'Murilo', cidade: 'Jabaquara', estado: 'SP', ativo: true },
    { nome: 'Murilo', cidade: 'Jabaquara', estado: 'SP', ativo: false },
    { nome: 'Murilo', cidade: 'Jabaquara', estado: 'SP', ativo: true },
    { nome: 'Murilo', cidade: 'Jabaquara', estado: 'SP', ativo: false },
    { nome: 'Murilo', cidade: 'Jabaquara', estado: 'SP', ativo: true },
    { nome: 'Murilo', cidade: 'Jabaquara', estado: 'SP', ativo: false },
    { nome: 'Murilo', cidade: 'Jabaquara', estado: 'SP', ativo: true },
    { nome: 'Murilo', cidade: 'Jabaquara', estado: 'SP', ativo: false },
    { nome: 'Murilo', cidade: 'Jabaquara', estado: 'SP', ativo: true },
    { nome: 'Murilo', cidade: 'Jabaquara', estado: 'SP', ativo: false }
  ];


}
