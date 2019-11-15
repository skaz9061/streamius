import { Component } from '@angular/core';

@Component({
  selector: 'search-bar',
  templateUrl: './searchBar.component.html',
  styleUrls: ['../../app.component.css', './searchBar.component.css']
})
export class SearchBarComponent {
  searchString: string = "";
}