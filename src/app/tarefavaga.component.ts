import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Cargo } from './cargo.model';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

const CARGO: Array<any> = [
  { id: 1, title: 'Fazer tarefa 1' },
  { id: 2, title: 'Fazer tarefa 2' },
  { id: 3, title: 'Fazer tarefa 3' },
  { id: 4, title: 'Fazer tarefa 4' },
  { id: 5, title: 'Fazer tarefa 5' },
  { id: 6, title: 'Fazer tarefa 6' },
  { id: 7, title: 'Fazer tarefa 7' },
];

@Component({
  selector: 'tarefavaga',
  templateUrl: './tarefavaga.component.html'
})

export class TarefavagaComponent implements OnInit{
  public cargo;
  public isCollapsed = true;
  selected: string;
   tarefa: string[] = [
    'Analise de informacao de vendas',
    'Producao de manual de vendas',
    'Producao de imagens publicitarias',
    'RElatorios de vendas a gerencia',
  ];
  public form: FormGroup;
  public constructor(
  private formBuilder: FormBuilder
  ){
    this.form = this.formBuilder.group({
      vaga: [null],
      title: [null],
      love: [null],
      burocratic: [null],
      visibility: [null],
      indiosincratic: [null],
      important: [null],
      tempo :[null],
      tempotypeid :[null],
      produtividade :[null],
      produtividadetypeid :[null],
      expiriancerequired: [null],
      expiriancerequiredtypeid: [null],
      expiriancerequireddificulty: [null],
      skillset: [null],
      numbsub: [null],
      sublevel: [null],
      numbpeer: [null],
      peerlevel: [null],
      numbboss: [null],
      bosslevel: [null],
      selfquailitylevel: [null],
      selfleveldirigism: [null],
      conquest: [null],

  })
  }
  public ngOnInit(){
    this.cargo = CARGO;
  }
}