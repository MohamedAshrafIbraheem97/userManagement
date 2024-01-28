import { Component, EventEmitter, Output } from '@angular/core';
import { PERMISSIONS } from '../../models/user.model';

@Component({
  selector: 'app-filter-users',
  templateUrl: './filter-users.component.html',
  styleUrls: ['./filter-users.component.scss'],
})
export class FilterUsersComponent {
  permissions = PERMISSIONS;

  @Output() filterValue = new EventEmitter<string>();
  applyFilter(event: string) {
    const textInput = event;
    this.filterValue.emit(textInput);
  }
}
