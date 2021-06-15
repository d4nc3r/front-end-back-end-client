import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { ParksComponent } from './components/parks/parks.component';
import { FourOhFourComponent } from './components/four-oh-four/four-oh-four.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ReactiveFormsModule } from '@angular/forms';
import { ParkListComponent } from './components/parks/park-list/park-list.component';
import { EffectsModule } from '@ngrx/effects';
import { ParksEffects } from './effects/parks.effects';
import { ParksService } from './services';
import { effects } from './effects';
import { OutingEntryComponent } from './components/outing-entry/outing-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ParksComponent,
    FourOhFourComponent,
    ParkListComponent,
    OutingEntryComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    ReactiveFormsModule,
    EffectsModule.forRoot(effects)
  ],
  providers: [ParksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
