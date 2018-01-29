import { PessoaFiltro, PessoaService } from './../pessoa.service';
import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/components/common/lazyloadevent';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent implements OnInit {

  totalRegistros = 0;
  filtro = new PessoaFiltro();
  pessoas = [];

  constructor(private pesoaService: PessoaService) { }

  ngOnInit() {}

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.pesoaService.pesquisar(this.filtro)
      .then(resultado => {
        this.totalRegistros = resultado.total;
        this.pessoas = resultado.lancamentos;
      });
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

}
