import { NgModule } from '@angular/core';
import { UserManagementContainerComponent } from './components/user-management-container/user-management-container.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { CommonModule } from '@angular/common';
import { UserManagementRoutingModule } from './user-management-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SearchUsersComponent } from './components/search-users/search-users.component';
import { FilterUsersComponent } from './components/filter-users/filter-users.component';
import { UserFormComponent } from './components/userForm/userForm.component';
import { ExportUsersComponent } from './components/export-users/export-users.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  declarations: [
    UserManagementContainerComponent,
    UserListComponent,
    SearchUsersComponent,
    FilterUsersComponent,
    UserFormComponent,
    ExportUsersComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    UserManagementRoutingModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    TranslateModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDialogModule,
  ],
})
export class UserManagementModule {}
