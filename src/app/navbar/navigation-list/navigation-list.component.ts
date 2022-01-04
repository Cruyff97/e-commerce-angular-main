import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation-list',
  templateUrl: './navigation-list.component.html',
  styleUrls: ['./navigation-list.component.scss']
})
export class NavigationListComponent implements OnInit {
@Output () sidenavClose= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
public onSideNavClose= () => {
  this.sidenavClose.emit()
}
}
