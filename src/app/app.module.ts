import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Facesnapsg1Component } from './facesnapsg1/facesnapsg1.component';
import { FSL1Component } from './fsl1/fsl1.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { LandingPageComponentComponent } from './landing-page-component/landing-page-component.component';
@NgModule({
  declarations: [
    AppComponent,
    Facesnapsg1Component,
    FSL1Component,
    HeaderComponent,
    LandingPageComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


