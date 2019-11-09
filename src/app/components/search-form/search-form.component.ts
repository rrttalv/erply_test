import { Component, OnInit, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  @Output() search = new EventEmitter();
  queryForm = new FormGroup({
    companyVAT: new FormControl('', [Validators.pattern("(^[a-zA-Z]+[a-zA-Z])"), Validators.min(8), Validators.max(14)])
  })
  constructor() { }

  ngOnInit() {
  }

  get companyVAT(){
    return this.queryForm.get('companyVAT')
  }

  errorList = [
    {pattern: "Company VAT number has to start with country code"}, 
    {min: "VAT number has to be at least 8 characters long"}, 
    {max: "VAT number cannot be longer then 14 characters"}
  ]

  submitQuery(){
    if(this.queryForm.valid){
      this.search.emit(this.queryForm.value)
    }
  }

}
