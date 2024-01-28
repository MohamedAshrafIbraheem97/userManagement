import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PERMISSIONS, SharedId, User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-new-user',
  templateUrl: './userForm.component.html',
  styleUrls: ['./userForm.component.scss'],
})
export class UserFormComponent implements OnInit {
  userForm!: FormGroup;
  permissions = PERMISSIONS;
  pageMode: string = 'new';
  userId!: SharedId;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private translateService: TranslateService
  ) {}
  ngOnInit() {
    this.userForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      location: ['', Validators.required],
      permission: ['', Validators.required],
    });

    this.getMode();
  }
  submitForm() {
    if (this.userForm.valid) {
      let user: User = {
        fullName: this.userForm.value.fullName ?? '',
        email: this.userForm.value.email ?? '',
        location: this.userForm.value.location ?? '',
        avatar: '',
        joinDate: new Date().toString(),
        permission: this.userForm.value.permission as PERMISSIONS, // Use VIEWER as default if no permission is selected
      };

      if (this.pageMode == 'new') {
        this.saveNewUser(user);
      } else {
        user.id = this.userId.id;
        this.updateUser(user);
      }
      this.router.navigate(['user-list']);
    }
  }

  saveNewUser(user: User) {
    this.userService.saveUser(user).subscribe((user) => {
      this.translateService
        .get('userSavedSuccessfully')
        .subscribe((res: string) => {
          console.log(res);
          this.toastr.success(res);
        });
    });
  }

  updateUser(user: User) {
    this.userService.updateUser(user).subscribe((user) => {
      this.translateService
        .get('userSavedSuccessfully')
        .subscribe((res: string) => {
          this.toastr.success(res);
        });
    });
  }

  getUserData(userId: SharedId) {
    this.userService.getUserById(userId).subscribe((user) => {
      if (user) {
        this.userForm.setValue({
          fullName: user.fullName,
          email: user.email,
          location: user.location,
          permission: user.permission,
        });
      }
    });
  }

  disabledUserForm() {
    this.userForm.disable();
  }

  getMode() {
    this.activatedRoute.queryParams.subscribe((params) => {
      const mode = params['mode'];
      this.pageMode = mode;
      if (mode != 'new') {
        this.activatedRoute.paramMap.subscribe((params) => {
          if (params.has('id')) {
            const userId = params.get('id') ?? '';
            this.userId = { id: userId };
            this.getUserData({ id: userId });
          }
        });
      }
      if (mode == 'view') {
        this.disabledUserForm();
      }
    });
  }
}
