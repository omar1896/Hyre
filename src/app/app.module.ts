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
import { ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './Components/signin/signin.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { SignupOptionComponent } from './Components/signup-option/signup-option.component';
import { FooterComponent } from './Components/footer/footer.component';
import { MytoastComponent } from './Components/mytoast/mytoast.component';
import { ToastModule } from '@coreui/angular';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ResponseInterceptor } from './intercreptors/response.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastService } from './Services/toast-service.service';

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
    SignupFormComponent,
    SigninComponent,
    FooterComponent,
    MytoastComponent,
    ForgotPasswordComponent,
    SignupOptionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ToastModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    ToastService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ResponseInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
