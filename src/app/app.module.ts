import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { env } from 'src/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressBookComponent } from './components/containers/address-book/address-book.component';
import { AddressCardComponent } from './components/ui/address-card/address-card.component';
import { MaterialUiModule } from './utils/material-ui/material-ui.module';
import { HeaderComponent } from './components/ui/header/header.component';
import { IconButtonComponent } from './components/ui/icon-button/icon-button.component';
import { FilterToolbarComponent } from './components/ui/filter-toolbar/filter-toolbar.component';


@NgModule({
  declarations: [AppComponent, AddressBookComponent, AddressCardComponent, HeaderComponent, IconButtonComponent, FilterToolbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialUiModule,
     provideFirebaseApp(() => initializeApp(env.firebaseConfig)),
     provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
