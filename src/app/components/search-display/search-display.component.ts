import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-display',
  templateUrl: './search-display.component.html',
  styleUrls: ['./search-display.component.css']
})
export class SearchDisplayComponent implements OnInit {
  @Input() companyName: String;
  @Input() vatNumber: Number;
  @Input() address: String;
  @Input() requestDate: Date;
  @Input() isValid: Boolean;
  constructor() { }

  ngOnInit() {
  }

}
