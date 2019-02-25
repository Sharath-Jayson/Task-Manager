import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

navList;

  constructor() { }

  ngOnInit() {
    this.navList = [{name: 'home',id: 0, address: "royapet"}, {name: 'about', id: 1}, {name: 'gallery'}, {name: 'contact'}]
  }

}
