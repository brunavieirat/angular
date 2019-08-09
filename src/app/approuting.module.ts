import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { CargoComponent } from './cargo.component';
import { DashboardComponent } from './dashboard.component'
import { VagaComponent } from './vaga.component'

const ROUTES = RouterModule.forRoot([
  { path: 'vaga', component: VagaComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'CV', component: CargoComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
])


@NgModule({
  imports: [ROUTES],
  exports: [RouterModule]
})

export class AppRoutingModule {

}