import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public linkList = [{name: "About", link: '/about'}, {name: "contact", link: '/contact'}]
  constructor() { }

  ngOnInit() {
  }

}
