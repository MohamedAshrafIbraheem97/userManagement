import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/user-management/models/user.model';
import { DeleteDialogService } from '../../services/delete-dialog.service';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss'],
})
export class DeleteDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private deleteDialogService: DeleteDialogService
  ) {}
  onCancelClick(): void {
    this.dialogRef.close();
  }

  onDeleteClick() {
    this.deleteDialogService.isDeleteClicked.next({
      isDeleteClicked: true,
      itemIdToBeDeleted: { id: this.data.id },
    });
    this.onCancelClick();
  }
}
