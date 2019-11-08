import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { SearchDisplayComponent } from './components/search-display/search-display.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    SearchFormComponent,
    NavbarComponent,
    SearchResultComponent,
    SearchDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
