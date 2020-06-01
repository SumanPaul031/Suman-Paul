import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    ResumeComponent,
    ContactComponent,
    AboutMeComponent,
    NavbarComponent,
    ProductPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
