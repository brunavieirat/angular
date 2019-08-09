import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';
import { CargoComponent } from './cargo.component';
import { DashboardComponent } from './dashboard.component'
import { MetasComponent } from './metas.component';
import { NavbarComponent } from './navbar.component'
import { TarefaComponent } from './tarefa.component'
import { TarefavagaComponent } from './tarefavaga.component'
import { VagaComponent } from './vaga.component'
import { AppRoutingModule } from "./approuting.module";

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule,  BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),  CollapseModule.forRoot(),  TypeaheadModule.forRoot(),TimepickerModule.forRoot(),BsDropdownModule.forRoot(), ],
  declarations: [ AppComponent, CargoComponent,DashboardComponent, NavbarComponent, TarefaComponent, VagaComponent, TarefavagaComponent,MetasComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
