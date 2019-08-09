import { Component, OnInit } from '@angular/core';
import { Cargo } from './cargo.model';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { BsDatepickerModule } from 'ngx-bootstrap';

const CARGO: Array<any> = [
  { id: 1, title: 'Fazer tarefa 1' },
  { id: 2, title: 'Fazer tarefa 2' },
  { id: 3, title: 'Fazer tarefa 3' },
  { id: 4, title: 'Fazer tarefa 4' },
  { id: 5, title: 'Fazer tarefa 5' },
  { id: 6, title: 'Fazer tarefa 6' },
  { id: 7, title: 'Fazer tarefa 7' },
];

const METAShj: Array<any> = [
  { id: 1, title: 'Salario', valor: 'R$ 3000' },
  { id: 2, title: 'Beneficio', valor: 'Creche' },
  { id: 3, title: 'Beneficio', valor: 'VR' },
  { id: 4, title: 'Desenvolvimento', valor: 'Dominar programacao em JS' },
  { id: 5, title: 'Carreira', valor: 'Gerente Marketing' },
  { id: 6, title: 'Home Office', valor: '3 x semana' },
  { id: 7, title: 'Geografia', valor: 'Ate 10 KM de casa' },
];

const METAS5: Array<any> = [
  { id: 1, title: 'Carreira', valor: 'VP Marketing' },
  { id: 2, title: 'Carreira', valor: 'Brand Manager' },
  { id: 3, title: 'Salario', valor: 'R$ 50.000' },
  { id: 4, title: 'Desenvolvimento', valor: 'Dominar programacao em JS' },
  { id: 5, title: 'Carreira', valor: 'Diretor Comercial' },
  { id: 6, title: 'Desenvolvimento', valor: 'Gestao expressiva nivel Avancado' },
];

const METAS2nd: Array<any> = [
  { id: 1, title: 'Desenvolvimento', valor: 'Fotografia de Estrelas' },
  { id: 2, title: 'Desenvolvimento', valor: 'Dj and autotunning' },
  { id: 3, title: 'Geografia', valor: 'Ate 4 KM de casa'  },
  { id: 4, title: 'Desenvolvimento', valor: 'Dominar programacao em JS' },
  { id: 5, title: 'Horario de entrada', valor: 'Depois das 18 horas' },
  { id: 6, title: 'Horas por semana', valor: '14' },
  { id: 7, title: 'Carreira', valor: 'Garcom' },
  { id: 8, title: 'Carreira', valor: 'Cargo de tousador em Petshop' },
];


const LIFE: Array<any> = [
  { id: 1, title: 'Nao tenho interesse', body: 'Nao tenho interesse, to bem benzao, quero continuar a vida como ta sem procurar outro trabalho ou hobbyes,' },
  { id: 2,  title: 'Mudar Ja!', body: 'To de Saco Cheio do meu trabalho, quero achar outro agora ou estou desempregado' },
  { id: 3,  title: 'To bem mas aceito olhar', body: 'to bem mas aceito outro trabalho se tiver algo que atinge melhor minhas metas do que o que estou agora ou olhando para algo que comece daqui uns 3/6 meses' },
  { id: 4, title: 'Second Job for me!', body: 'to bem mas quero explorar meu desenvolvimento, hobbys freelas etc.. quero oportunitdades de curto prazo basicas para aprender ou complciadas com mais tempo para evoluir e criar' },
];


@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit{
  public cargo;
  public isCollapsed = true;
  public isCollapsedhj = true;
  public isCollapsed5 = true;
  public isCollapsed2nd = true;
  public metashj;
  public metas5: string[];
  public metas2nd;
  public lifez: number;
   selected: string;
   states: string[] = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
  ];
  public constructor(){
  }

  public ngOnInit(){
    this.cargo = CARGO;
    this.metashj= METAShj;
    this.metas5= METAS5;
    this.metas2nd= METAS2nd;
  }

  
 // public onSelect(metas: LIFE):void{
    
//}
}