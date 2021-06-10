import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { SearchComponent } from './search/search.component';
import { GifsComponent } from './gifs/gifs.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    SearchComponent,
    GifsComponent
  ],
  imports: [
    BrowserModule,   
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
