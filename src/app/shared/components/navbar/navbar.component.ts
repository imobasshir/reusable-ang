import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() items: string[] = [];


  @Output() selected = new EventEmitter();

  activeItem: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  select(index: number, item: string) {
    this.activeItem = index;
    this.selected.emit(item);
  }
}
