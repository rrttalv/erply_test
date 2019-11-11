import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, state, style, animate } from '@angular/animations';

@Component({
  selector: 'app-archived-search-display',
  templateUrl: './archived-search-display.component.html',
  styleUrls: ['./archived-search-display.component.css'],
  animations: [
    trigger('fadeIn', [
      state('in', style({opacity: 1})),
      transition(':enter', [
        style({opacity: 0}),
        animate(1500 )
      ]),
      transition(':leave',
        animate(1500, style({opacity: 0})))
    ])
  ]
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
