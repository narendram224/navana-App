import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserComponent } from './components/browser/browser.component';
import { ViewerComponent } from './components/viewer/viewer.component';
import {HttpClientModule} from '@angular/common/http';
import { ApiService } from './service/api/api.service';
import { ScreenService } from './service/screen/screen.service';
import { AudioService } from './service/audio/audio.service';

@NgModule({
  declarations: [
    AppComponent,
    BrowserComponent,
    ViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [ApiService,ScreenService,AudioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
