import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app1';
  items1 = ['One', 'Two', 'Three', 'Four', 'Five'];
  selectItem1: string = '';

  onSelectItem1(item: string) {
    this.selectItem1 = item;
    console.log(`Selected item: ${item}`);
  }

  items2 = ['1', '2', '3', '4', '5'];
  selectItem2: string = '';
  onSelectItem2(item: string) {
    this.selectItem2 = item;
    console.log(`Selected item: ${item}`);
  }
}
