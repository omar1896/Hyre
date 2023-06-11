import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { AboutComponent } from './Components/AboutComponent/about/about.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { MainComponent } from './Components/main/main.component';
import { RoundedButtonComponent } from './Components/rounded-button/rounded-button.component';
import { InfoCardComponent } from './Components/info-card/info-card.component';
import { ToggleButtonComponent } from './Components/toggle-button/toggle-button.component';
import { SignupFormComponent } from './Components/signup-form/signup-form.component';
import { ReactiveFormsModule } from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutComponent,
    NotFoundComponent,
    MainComponent,
    InfoCardComponent,
    RoundedButtonComponent,
    ToggleButtonComponent,
    SignupFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
