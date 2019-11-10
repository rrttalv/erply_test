import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../services/get-data.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  constructor(private search: GetDataService) { }

  ngOnInit() {
  }

  submitSearch(form){
    var value = form.companyVAT;
    this.search.getCompanyInfo(value).subscribe( searchData => {
      if(searchData){
        console.log(searchData)
      }
    })
  }

}
