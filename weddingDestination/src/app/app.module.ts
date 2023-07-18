import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LocationComponent } from './location/location.component';
import { ServiceComponent } from './service/service.component';
import { ContactusComponent } from './contactus/contactus.component';
import { BlogComponent } from './blog/blog.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WeddingPortfolioComponent } from './wedding-portfolio/wedding-portfolio.component';
import { LocationukComponent } from './locationuk/locationuk.component';
import { LocationRajasthanComponent } from './location-rajasthan/location-rajasthan.component';
import { LocationGoaComponent } from './location-goa/location-goa.component';
import { CarrerComponent } from './carrer/carrer.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AboutusComponent,
    LocationComponent,
    ServiceComponent,
    ContactusComponent,
    BlogComponent,
    ErrorComponent,
    WeddingPortfolioComponent,
    LocationukComponent,
    LocationRajasthanComponent,
    LocationGoaComponent,
    CarrerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
