import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {API_CONFIGURATION} from 'libs/auth/data-access/src';
import {environment} from '../environments/environment';
import {AuthInterceptor} from 'libs/shared/interceptors/auth.interceptor';
import {ToastrModule} from 'ngx-toastr';
import {SharedComponentsSpinnerModule} from 'libs/shared/components/spinner/src/index';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    SharedComponentsSpinnerModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: API_CONFIGURATION,
      useValue: environment.apiDomain,
    },
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
