import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { AdminComponent } from './pages/admin/admin.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
//enviroments//
import { environment } from 'src/environments/environment';
import { MenubarModule } from 'primeng/menubar';
import { AngularFireModule } from '@angular/fire/compat';


@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    AdminComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
