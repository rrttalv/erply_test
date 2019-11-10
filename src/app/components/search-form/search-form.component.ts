import { Component, OnInit, Output, ComponentRef, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ErrorDisplayComponent } from '../error-display/error-display.component'
import { EventEmitter } from 'events';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  @Output() search = new EventEmitter();
  errorDisplay: ComponentRef<ErrorDisplayComponent>;
  @ViewChild('errorDiv', { static: false }) errorContainer: ViewContainerRef;
  errorMessage: String;
  queryForm = new FormGroup({
    companyVAT: new FormControl('', [Validators.pattern("^[a-zA-Z]{2}.+$"), Validators.minLength(8), Validators.maxLength(14)])
  })
  constructor(private factory: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  get companyVAT(){
    return this.queryForm.get('companyVAT')
  }

  errorList =
    { pattern: "Company VAT number has to start with country code", 
      minlength: "VAT number has to be at least 8 characters long", 
      maxlength: "VAT number cannot be longer then 14 characters" }

  submitQuery(){
    console.log(this.queryForm)
    if(this.queryForm.valid){
      this.search.emit(this.queryForm.value)
    }else{
      this.displayError();
    }
  }

  displayError(){
    const error = this.companyVAT.errors;
    if(error !== null){
      this.errorMessage = this.errorList[Object.keys(error)[0]];
    }
  }

}
