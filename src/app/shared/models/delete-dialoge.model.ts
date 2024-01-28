import { SharedId } from 'src/app/user-management/models/user.model';

export interface DeleteDialogElement {
  isDeleteClicked: boolean;
  itemIdToBeDeleted: SharedId;
}
