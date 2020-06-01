import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ProductPageComponent } from './components/product-page/product-page.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'portfolio' },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'project/:name', component: ProductPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
