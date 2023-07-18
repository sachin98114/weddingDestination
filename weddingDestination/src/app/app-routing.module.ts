import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LocationComponent } from './location/location.component';
import { ServiceComponent } from './service/service.component';
import { ContactusComponent } from './contactus/contactus.component';
import { BlogComponent } from './blog/blog.component';
import { ErrorComponent } from './error/error.component';
import { WeddingPortfolioComponent } from './wedding-portfolio/wedding-portfolio.component';
import { LocationukComponent } from './locationuk/locationuk.component';
import { LocationRajasthanComponent } from './location-rajasthan/location-rajasthan.component';
import { LocationGoaComponent } from './location-goa/location-goa.component';
import { CarrerComponent } from './carrer/carrer.component';

const routes: Routes = [
  {path:"" , component:HomeComponent},
  {path:"login" , component:LoginComponent},
  {path:"aboutus" , component:AboutusComponent},
  {path:"locationDl" , component:LocationComponent},
  {path:"locationUk" , component:LocationukComponent},
  {path:"locationRj" , component:LocationRajasthanComponent},
  {path:"locationGoa" , component:LocationGoaComponent},
  {path:"service" , component:ServiceComponent},
  {path:"weddingPortfolio" , component:WeddingPortfolioComponent},
  {path:"contactus" , component:ContactusComponent},
  {path:"blog" , component:BlogComponent},
  {path:"carrer" , component:CarrerComponent},
  {path:"**" , component:HomeComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
