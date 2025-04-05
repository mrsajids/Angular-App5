import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModule,
    RouterOutlet,
    // this need to add in shared module
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
