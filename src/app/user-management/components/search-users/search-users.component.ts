import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.scss'],
})
export class SearchUsersComponent {
  @Output() filterValue = new EventEmitter<string>();
  applyFilter(event: Event) {
    const textInput = (event.target as HTMLInputElement).value;
    this.filterValue.emit(textInput.trim().toLowerCase());
  }
}
