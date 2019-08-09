import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Cargo } from './cargo.model';
import {coerceNumberProperty} from '@angular/cdk/coercion';
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
  selector: 'metas',
  templateUrl: './metas.component.html'
})

export class MetasComponent implements OnInit{
  public cargo;
  public isCollapsed = true;
  mytimein: Date = new Date();
  mytimeend: Date = new Date();
  public form: FormGroup;

  public constructor(
  private formBuilder: FormBuilder
  ){
    this.form = this.formBuilder.group({
      metas: [null],
      salariominimo: [null],
      starsalariominimo: [null],
      salariogoal: [null],
      starsalariogoal: [null],
      starbonus: [null],
      bonuspercentage: [null],
      starmethodbonus: [null],
      methodbonus: [null],
      va :[null],
      vt :[null],
      vsaude :[null],
      vcreche :[null],
      enderecocasa: [null],
      distanciacasa: [null],
      stardistancia: [null],
      novacidade: [null],
      distanciacidade: [null],
      starnovacidade: [null],
      horassemanais: [null],
      starhorassemanais: [null],
      horasextrassemanais: [null],
      starhorasextrassemanais: [null],
      tipodecontrato: [null], 
      startipodecontrato: [null],
      inicioturno: [null], 
      starinicioturno: [null], 
      fimturno: [null], 
      starfimturno: [null], 
      diashomeoffice: [null], 
      stardiashomeoffice: [null],
      diasmesminviagem: [null], 
      diasmesmaxviagem: [null], 
      starviagem: [null],
      rangesocial: [null], 
      starsocial: [null],
      grauinteracaopessoas: [null],
      stargrauinteracaopessoas: [null],
      devtitle: [null], 
      razaodev: [null], 
      stardev: [null],
      carreiratitle: [null], 
      razaocarreiratext: [null], 
      starcarreira: [null],
      missaosociallevel: [null], 
      starmissaosociallevel: [null],
    })
  }

  public ngOnInit(){
    this.cargo = CARGO;
  }
}

// export class SliderConfigurableExample {
//   autoTicks = false;
//   disabled = false;
//   invert = false;
//   max = 100;
//   min = 0;
//   showTicks = false;
//   step = 1;
//   thumbLabel = false;
//   value = 0;
//   vertical = false;

//   get tickInterval(): number | 'auto' {
//     return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
//   }
//   set tickInterval(value) {
//     this._tickInterval = coerceNumberProperty(value);
//   }
//   private _tickInterval = 1;
// }