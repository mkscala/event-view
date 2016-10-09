import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import './core/rxjs-extensions';
import { AppComponent } from './app.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import { InMemoryStoreService } from '../api/in-memory-store.service';
import { AppRoutingModule } from './app-routing.module';
import { SpeakerService } from './models';
import { PageNotFoundComponent } from './page-not-found.component';
import { CoreModule } from './core/core.module';
import { LoginModule } from './login/login.module';
import { AdminModule } from './admin/admin.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { SessionsModule } from './sessions/sessions.module';
import { SpeakersModule } from './speakers/speakers.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    LoginModule,

    AdminModule, DashboardModule, SessionsModule, SpeakersModule,

    // Routes get loaded in order. It is important that login
    // come before AppRoutingModule, as
    // AppRoutingModule defines the catch-all ** route
    AppRoutingModule,
    CoreModule,
    InMemoryWebApiModule.forRoot(InMemoryStoreService, { delay: 600 }),
  ],
  declarations: [AppComponent, PageNotFoundComponent],
  providers: [SpeakerService],
  bootstrap: [AppComponent],
})
export class AppModule { }


