import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'https://loiane.training';
  cursoAngular: boolean = true;
  urlImage: string = 'https://picsum.photos/seed/picsum/200/300';

  valorAtual: string = '';
  valorSalvo: string = '';

  isMouseOver: boolean = false;

  nome: string = 'emanoel';

  pessoa: any = {
    nome: 'emanoel',
    idade: 25
  }

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert('Botão clidado!')
  }

  onKeyUp(evento: KeyboardEvent) {
    console.log();
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor:any) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
