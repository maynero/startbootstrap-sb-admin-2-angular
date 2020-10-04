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

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SidebarBrandComponent,
    SidebarItemComponent,
    TopbarComponent,
    FooterComponent,
    TopbarSearchComponent,
    TopbarNavbarComponent
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
