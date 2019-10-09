import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './authinterceptor.service';
import { IonicStorageModule } from '@ionic/storage';
import { AuthenticationService } from './services/authentication.service';
import { AuthGuardService } from './services/auth-guard.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
// import { SuperTabsModule } from 'ionic2-super-tabs';
import { TabsService } from './services/tabs.service';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule, 
    IonicStorageModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthenticationService,
    AuthGuardService,
    TabsService,
    Geolocation,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide  : HTTP_INTERCEPTORS,
      useClass : AuthInterceptor,
      multi    : true
    }
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule {
  
}
