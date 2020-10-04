import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarBrandComponent } from './components/sidebar-brand/sidebar-brand.component';
import { SidebarItemComponent } from './components/sidebar-item/sidebar-item.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TopbarSearchComponent } from './components/topbar-search/topbar-search.component';
import { TopbarNavbarComponent } from './components/topbar-navbar/topbar-navbar.component';
import { E404Component } from './components/pages/e404/e404.component';
import { BlankComponent } from './components/pages/blank/blank.component';
import { ButtonsComponent } from './components/pages/buttons/buttons.component';
import { CardsComponent } from './components/pages/cards/cards.component';
import { ChartsComponent } from './components/pages/charts/charts.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/pages/forgot-password/forgot-password.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { TablesComponent } from './components/pages/tables/tables.component';
import { ColorComponent } from './components/pages/utilities/color/color.component';
import { BorderComponent } from './components/pages/utilities/border/border.component';
import { AnimationComponent } from './components/pages/utilities/animation/animation.component';
import { OthersComponent } from './components/pages/utilities/others/others.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SidebarBrandComponent,
    SidebarItemComponent,
    TopbarComponent,
    FooterComponent,
    TopbarSearchComponent,
    TopbarNavbarComponent,
    E404Component,
    BlankComponent,
    ButtonsComponent,
    CardsComponent,
    ChartsComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    LoginComponent,
    RegisterComponent,
    TablesComponent,
    ColorComponent,
    BorderComponent,
    AnimationComponent,
    OthersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { 

  constructor() {
    
  }
}
