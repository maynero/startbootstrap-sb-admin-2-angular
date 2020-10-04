import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonsComponent } from './components/pages/buttons/buttons.component';
import { CardsComponent } from './components/pages/cards/cards.component';
import { ChartsComponent } from './components/pages/charts/charts.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { E404Component } from './components/pages/e404/e404.component';
import { TablesComponent } from './components/pages/tables/tables.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'buttons.html',
    component: ButtonsComponent
  },
  {
    path: 'cards.html',
    component: CardsComponent
  },
  {
    path: '404.html',
    component: E404Component
  },
  {
    path: 'tables.html',
    component: TablesComponent
  },
  {
    path: 'charts.html',
    component: ChartsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
