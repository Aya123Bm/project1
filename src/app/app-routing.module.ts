import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Facesnapsg1Component } from './facesnapsg1/facesnapsg1.component';
import { LandingPageComponentComponent } from './landing-page-component/landing-page-component.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path: '',component:LandingPageComponentComponent },
  { path:'raniaya',component:Facesnapsg1Component}
 

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

  

