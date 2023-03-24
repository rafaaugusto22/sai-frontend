import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER , CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtInterceptor } from './core/seguranca/jwt-interceptor';
import { NgxSpinnerModule } from "ngx-spinner";

import { AutenticacaoGuard } from './core/seguranca/autenticacao.guard';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutenticacaoService } from '@app/core';
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeModule } from './home/home.module';
import { ShellModule } from './shell/shell.module';


export function autenticacaoFactory(autenticacaoService: AutenticacaoService) {
  return () => autenticacaoService.init();
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TranslateModule.forRoot(),
    CoreModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right'
    }),
    SharedModule,
    ShellModule,
    HomeModule,
    NgxSpinnerModule,
    AppRoutingModule 
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [AutenticacaoService,AutenticacaoGuard,
    {
      provide: APP_INITIALIZER,
      useFactory: autenticacaoFactory,
      deps: [AutenticacaoService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }], 
  bootstrap: [AppComponent]
})
export class AppModule { }
