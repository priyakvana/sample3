import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule}  from '@angular/http'

import { AppComponent } from './app.component';
import { SandboxComponent } from './components/sandbox/sandbox.component';
import {DataServices} from './services/data.services';
@NgModule({
  declarations: [
    AppComponent,
    SandboxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule ,
    HttpModule

  ],
  providers: [DataServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
