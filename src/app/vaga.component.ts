import { Component, OnInit} from '@angular/core';
import { Vaga } from './vaga.model';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

const VAGA: Array<any> = [
  { id: 1, title: 'Fazer tarefa 1' },
  { id: 2, title: 'Fazer tarefa 2' },
  { id: 3, title: 'Fazer tarefa 3' },
  { id: 4, title: 'Fazer tarefa 4' },
  { id: 5, title: 'Fazer tarefa 5' },
  { id: 6, title: 'Fazer tarefa 6' },
  { id: 7, title: 'Fazer tarefa 7' },
];

@Component({
  selector: 'vaga',
  templateUrl: './vaga.component.html'
})

export class VagaComponent implements OnInit{
  public vaga;
  public form: FormGroup;
  public constructor(
  private formBuilder: FormBuilder
  ){
      this.form = this.formBuilder.group({
        title: [null],
        company: [null],
        salariomax: [null],
        bonificacao: [null],
        vr: [null],
        va: [null],
        creche: [null],
        dataentry: [null],
        urgencia: [null],
        horas: [null],
        horasextra: [null],
        diasviajem: [null],
        overwork: [null],
 })
  }

  public ngOnInit(){
    this.vaga = VAGA;
  }
}