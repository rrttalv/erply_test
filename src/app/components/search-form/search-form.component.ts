import { Component, OnInit, Output, ComponentRef, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ErrorDisplayComponent } from '../error-display/error-display.component'
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  @Output() search = new EventEmitter();
  @ViewChild('errorDiv', { static: true, read: ViewContainerRef }) viewCont: ViewContainerRef;
  errorDisplay: ComponentRef<ErrorDisplayComponent>;
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
      maxlength: "VAT number cannot be longer than 14 characters" }

  submitQuery(){
    if(this.queryForm.valid){
      if(this.errorDisplay){
        this.destroyError();
      }
      this.search.emit(this.queryForm.value)
    }else{
      this.displayError();
    }
  }

  displayError(){
    if(this.errorDisplay){
      this.errorDisplay.destroy()
    }
    const error = this.companyVAT.errors;
    if(error !== null){
      this.errorMessage = this.errorList[Object.keys(error)[0]];
    }
    const factory = this.factory.resolveComponentFactory(ErrorDisplayComponent);
    this.errorDisplay = this.viewCont.createComponent(factory);
    this.errorDisplay.instance.errorMessage = this.errorMessage;
  }

  destroyError(){
    this.errorDisplay.destroy()
  }

}
