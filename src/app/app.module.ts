import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

import localeEs from "@angular/common/locales/es"; //epanhol
import localeFr from "@angular/common/locales/fr"; //frances
import localeAr from "@angular/common/locales/ar"; //arabe
import localeJa from "@angular/common/locales/ja"; //arabe
import { registerLocaleData } from "@angular/common";

registerLocaleData( localeEs );
registerLocaleData( localeFr );
registerLocaleData( localeAr );
registerLocaleData( localeJa );
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  providers: [
    //para establecer idioma por defecto en TODA a app
    {provide: LOCALE_ID, useValue: 'es' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
