import { CurrencyPipe, registerLocaleData } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import ptBr from '@angular/common/locales/pt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PagesModule } from './pages/pages.module';

registerLocaleData(ptBr);

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule, PagesModule],
	providers: [CurrencyPipe, { provide: LOCALE_ID, useValue: 'pt' }],
	bootstrap: [AppComponent],
})
export class AppModule {}
