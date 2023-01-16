import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { env } from 'src/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressBookComponent } from './components/containers/address-book/address-book.component';
import { FilterToolbarComponent } from './components/containers/filter-toolbar/filter-toolbar.component';
import { AddAddressModalComponent } from './components/ui/add-address-modal/add-address-modal.component';
import { AddressCardComponent } from './components/ui/address-card/address-card.component';
import { HeaderComponent } from './components/ui/header/header.component';
import { IconButtonComponent } from './components/ui/icon-button/icon-button.component';
import { FireStoreDbService } from './core/services/firestore-db.service';
import { MaterialUiModule } from './utils/material-ui/material-ui.module';
import { LoadingOverlayComponent } from './components/ui/loading-overlay/loading-overlay.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressBookComponent,
    AddressCardComponent,
    HeaderComponent,
    IconButtonComponent,
    FilterToolbarComponent,
    AddAddressModalComponent,
    LoadingOverlayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialUiModule,
    provideFirebaseApp(() => initializeApp(env.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [FireStoreDbService],
  bootstrap: [AppComponent],
})
export class AppModule {}
