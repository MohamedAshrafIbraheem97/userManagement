import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../../services/user.service';
import { PERMISSIONS, User } from '../../models/user.model';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from 'src/app/shared/components/delete-dialog/delete-dialog.component';
import { DeleteDialogService } from 'src/app/shared/services/delete-dialog.service';
import * as XLSX from 'xlsx';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit, AfterViewInit {
  @ViewChild('TABLE') table!: ElementRef;

  displayedColumns: string[] = [
    'fullName',
    'emailAddress',
    'location',
    'joinDate',
    'permission',
    'actions',
  ];
  permissions = PERMISSIONS;

  dataSource = new MatTableDataSource<User>(undefined);
  constructor(
    private userService: UserService,
    public dialog: MatDialog,
    private deleteDialogService: DeleteDialogService,
    private route: ActivatedRoute
  ) {}

  ngAfterViewInit(): void {}
  ngOnInit(): void {
    this.fetchUsers();
    this.listenToDeleteDialogClose();
    this.fetchResolvedUsers();
  }
  // fetch the resolver data so that load the data when the page is opened
  fetchResolvedUsers() {
    this.route.data.subscribe((data) => {});
  }

  // fetch users data from the service
  fetchUsers() {
    this.userService
      .getUsers()
      .subscribe((user) => (this.dataSource.data = user));
  }

  // update the table data source when any filters is applied
  updateDataSource(item: string) {
    this.dataSource.filter = item;
  }

  // open the delete dialog
  openDialog(row: User): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: row,
    });
  }

  //if delete dialog is opened and cliked the delete button then close it and refetch the users
  listenToDeleteDialogClose() {
    this.deleteDialogService.isDeleteClicked.subscribe((isClicked) => {
      if (isClicked.isDeleteClicked) {
        this.userService
          .deleteUserById({ id: isClicked.itemIdToBeDeleted.id })
          .subscribe((res) => {
            this.fetchUsers();
          });
      }
    });
  }
}
