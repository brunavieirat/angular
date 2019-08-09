import { Component, OnInit } from '@angular/core';
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
  selector: 'cargo',
  templateUrl: './cargo.component.html'
})

export class CargoComponent implements OnInit {
  public cargo;

  emp: string;
  sect: string;
  carg: string;
  cargos: string[] = [
    'Diretor de Vendas',
    'Planejamento de Vendas',
    'Analista de Vendas',
    'Analista de Marketing',
  ];
  setor: string[] = [
    'Mercado de Capitais',
    'Divida',
    'Habiltacao popular',
    'Habitacao de alta renda',
  ];
  empresa: string[] = [
    'Abyara',
    'Nestle',
    'Cyrela',
    'Unilever',
  ];
  public form: FormGroup;
  public constructor(
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      cargos: new FormControl(),
      setor: new FormControl(),
      empresa: new FormControl(),
      exit: new FormControl()
    })
  }
  public ngOnInit() {
    this.cargo = CARGO;
  }
}