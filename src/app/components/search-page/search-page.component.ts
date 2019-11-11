import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild, ComponentRef } from '@angular/core';
import { SearchDisplayComponent } from '../search-display/search-display.component';
import { ArchivedSearchDisplayComponent } from '../archived-search-display/archived-search-display.component';
import { GetDataService } from '../../services/get-data.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  searchResult: Object;
  previousResults = [];
  loading: Boolean;
  resultComponent: ComponentRef<SearchDisplayComponent>;
  @ViewChild('searchResult', { static: true, read: ViewContainerRef }) resultCont: ViewContainerRef;
  @ViewChild('searchHistory', { static: true, read: ViewContainerRef }) historyCont: ViewContainerRef;
  constructor(private search: GetDataService, private factory: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  submitSearch(form){
    var value = form.companyVAT;
    /* Check if the search result component is already in use */
    if(this.searchResult && this.searchResult['Valid']){
      this.archiveSearch(this.searchResult);
      this.resultComponent.destroy();
    }
    this.loading = true;
    /* Get data from API */
    this.search.getCompanyInfo(value).subscribe( searchData => {
      if(searchData){
        this.loading = false;
        this.searchResult = searchData;
        this.displaySearch()
      }
    })
  };

  /* Create a component that displays the result and inject into template */
  displaySearch(){
    const factory = this.factory.resolveComponentFactory(SearchDisplayComponent);
    this.resultComponent = this.resultCont.createComponent(factory);
    if(this.searchResult['Valid']){
      this.resultComponent.instance.isValid = this.searchResult['Valid'];
      this.resultComponent.instance.address = this.searchResult['Address'];
      this.resultComponent.instance.companyName = this.searchResult['Name'];
      this.resultComponent.instance.vatNumber = this.searchResult['VATNumber'];
      this.resultComponent.instance.countryCode = this.searchResult['CountryCode'];
      this.resultComponent.instance.requestDate = new Date();
    }else{
      this.resultComponent.instance.isValid = this.searchResult['Valid'];
    }

  }


  /* Create a component that displays the archived results and inject into template. Does not allow the results to repeat.*/
  archiveSearch(result){
    var previousSearches = this.previousResults.map(value => value['VATNumber']);
    if(!previousSearches.includes(result['VATNumber'])){
      this.previousResults.push(result);
      const factory = this.factory.resolveComponentFactory(ArchivedSearchDisplayComponent);
      const component = this.historyCont.createComponent(factory, 0);
      component.location.nativeElement.classList.add('col-lg-6', 'margin-top');
      component.instance.address = result['Address'];
      component.instance.companyName = result['Name'];
      component.instance.vatNumber = result['VATNumber'];
      component.instance.requestDate = this.resultComponent.instance.requestDate;
      component.instance.countryCode = this.searchResult['CountryCode']
    }
  }

}
