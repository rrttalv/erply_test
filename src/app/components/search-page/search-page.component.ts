import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import { GetDataService } from '../../services/get-data.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  searchResult: Object;
  previousResults = [];
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
      }
    })
  };

  displaySearch(){

  }

  archiveSearch(query, result){
    let vatValues = this.previousResults.map(res => res['VATNumber']);
    if(!vatValues.includes(query.substring(2))){
      this.previousResults.push(result);
    }
  }

}
