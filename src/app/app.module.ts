import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AmexioWidgetModule } from 'amexio-ng-extensions';

import { AppComponent } from './app.component';
import { AppInitService } from './service/appinit.service';
import { UserComponent } from './components/user.component';

export function init(appInitService: AppInitService) {
  return () => appInitService.init();
}

export function loadUrls(appInitService: AppInitService) {
  return () => appInitService.loadUrls();
}

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AmexioWidgetModule
  ],
  providers: [
    AppInitService,
    { provide: APP_INITIALIZER, useFactory: init, deps: [AppInitService], multi: true },
    { provide: APP_INITIALIZER, useFactory: loadUrls, deps: [AppInitService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
