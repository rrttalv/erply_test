import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-archived-search-display',
  templateUrl: './archived-search-display.component.html',
  styleUrls: ['./archived-search-display.component.css']
})
export class ArchivedSearchDisplayComponent implements OnInit {
  @Input() companyName: String;
  @Input() vatNumber: Number;
  @Input() countryCode: String;
  @Input() address: String;
  @Input() requestDate: Date;
  constructor() { }

  ngOnInit() {
  }

}
