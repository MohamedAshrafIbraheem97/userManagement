import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DeleteDialogElement } from '../models/delete-dialoge.model';

@Injectable({
  providedIn: 'root',
})
export class DeleteDialogService {
  isDeleteClicked = new BehaviorSubject<DeleteDialogElement>({
    isDeleteClicked: false,
    itemIdToBeDeleted: { id: undefined },
  });

  constructor() {}
}
