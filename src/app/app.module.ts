import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { SearchDisplayComponent } from './components/search-display/search-display.component';
import { ErrorDisplayComponent } from './components/error-display/error-display.component';
import { ArchivedSearchDisplayComponent } from './components/archived-search-display/archived-search-display.component';

import { GetDataService } from './services/get-data.service';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    SearchFormComponent,
    SearchResultComponent,
    SearchDisplayComponent,
    ErrorDisplayComponent,
    ArchivedSearchDisplayComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [GetDataService],
  entryComponents: [ErrorDisplayComponent, SearchDisplayComponent, ArchivedSearchDisplayComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
