import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild, ComponentRef } from '@angular/core';
import { SearchDisplayComponent } from '../search-display/search-display.component';
import { GetDataService } from '../../services/get-data.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  searchResult: Object;
  previousResults = [];
  resultComponent: ComponentRef<SearchDisplayComponent>;
  @ViewChild('searchResult', { static: true, read: ViewContainerRef }) resultCont: ViewContainerRef;
  @ViewChild('searchHistory', { static: true, read: ViewContainerRef }) historyCont: ViewContainerRef;
  constructor(private search: GetDataService, private factory: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  submitSearch(form){
    var value = form.companyVAT;
    if(this.searchResult && this.searchResult['Valid']){
      this.archiveSearch(value, this.searchResult)
    }
    this.search.getCompanyInfo(value).subscribe( searchData => {
      if(searchData){
        this.searchResult = searchData;
        this.displaySearch()
      }
    })
  };

  displaySearch(){
    if(this.resultComponent){
      this.resultComponent.destroy();
    }
    const factory = this.factory.resolveComponentFactory(SearchDisplayComponent);
    this.resultComponent = this.resultCont.createComponent(factory);
    this.resultComponent.instance.isValid = this.searchResult['Valid'];
    this.resultComponent.instance.address = this.searchResult['Address'];
    this.resultComponent.instance.companyName = this.searchResult['Name'];
    this.resultComponent.instance.vatNumber = this.searchResult['VATNumber'];
  }

  archiveSearch(query, result){
    let vatValues = this.previousResults.map(res => res['VATNumber']);
    if(!vatValues.includes(query.substring(2))){
      this.previousResults.push(result);
      console.log(result)
      const factory = this.factory.resolveComponentFactory(SearchDisplayComponent);
      const component = this.historyCont.createComponent(factory);
      component.instance.isValid = result['Valid'];
      component.instance.address = result['Address'];
      component.instance.companyName = result['Name'];
      component.instance.vatNumber = result['VATNumber'];
    }
  }

}
