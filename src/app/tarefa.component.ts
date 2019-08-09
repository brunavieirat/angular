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
  selector: 'tarefa',
  templateUrl: './tarefa.component.html'
})

export class TarefaComponent implements OnInit{
  public cargo;
  public isCollapsed = true;

  tempotypeid: boolean;
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
      tarefa: [null],
      tempotypeid: [false],
      title: [null],
      cargo: [null],
      moreorless: [null],
      dev: [null],
      topskill:[null],
      likenolike: [null],
      goodngood: [null],
      tempo :[null],
      produtividade :[null],
      produtividadetypeid :[null],
      numsub: [null],
      sublevel: [null],
      numbpeer: [null],
      peerlevel: [null],
      numbboss: [null],
      bosslevel: [null],
      conquest: [null],
    })
  }
  public ngOnInit(){
    this.cargo = CARGO;
  }
//   onSubmitForm () {
//   console.log(this.orderForm.value);
// }

// onAddSpecialRequest () {
//   this.orderForm.controls
//   .specialRequests.push(new FormControl(null));
// }


//  addTarefa(tarefa?: Tarefa):void {
//      let name = tarefa ?;
//     (<FormArray>this.cargoForm.controls['tarefas']).push(
//       new FormGroup({
//       title: new FormControl(name, Validators.required), 
//       cargo: new FormControl(name, Validators.required), 
//       moreorless: new FormControl(name, Validators.required), 
//       dev: new FormControl(name, Validators.required), 
//       topskill: new FormControl(name, Validators.required),
//       likenolike: new FormControl(name, Validators.required), 
//       goodnogood: new FormControl(name, Validators.required), 
//       tempo : new FormControl(name, Validators.required),
//       tempotypeid : new FormControl(name, Validators.required),
//       produtividade : new FormControl(name, Validators.required),
//       produtividadetypeid : new FormControl(name, Validators.required),
//       numbsub: new FormControl(name, Validators.required), 
//       sublevel: new FormControl(name, Validators.required), 
//       numbpeer: new FormControl(name, Validators.required), 
//       peerlevel: new FormControl(name, Validators.required), 
//       numbboss: new FormControl(name, Validators.required), 
//       bosslevel: new FormControl(name, Validators.required), 
//       conquest: new FormControl(name, Validators.required), 
//    })
//     )
//   }

// onRemovetarefa (index) {
//  (<FormArray>this.cargoForm.controls['tarefas']).removeAt(index); 
// }
// onRemoveSpecialRequest (index) {
//   this.form.removeControl(index);
// }
}