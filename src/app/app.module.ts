import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { GeoLocComponent } from './geo-loc/geo-loc.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatSidenavModule, MatToolbarModule } from '@angular/material';
import { LeitorQrCodeComponent } from './leitor-qr-code/leitor-qr-code.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { EventoComponent } from './evento/evento.component';

@NgModule({
  declarations: [
    AppComponent,
    GeoLocComponent,
    ToolbarComponent,
    LeitorQrCodeComponent,
    EventoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatSidenavModule,
    MatToolbarModule,
    ZXingScannerModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
