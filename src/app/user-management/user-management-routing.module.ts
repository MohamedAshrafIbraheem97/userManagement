import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserManagementContainerComponent } from './components/user-management-container/user-management-container.component';
import { UserFormComponent } from './components/userForm/userForm.component';
import { UserResolver } from './resolvers/User.resolver';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: UserManagementContainerComponent,
    canActivateChild: [AuthGuard],
    children: [
      { path: '', redirectTo: 'user-list', pathMatch: 'full' },
      {
        path: 'user-list',
        component: UserListComponent,
        resolve: {
          userData: UserResolver,
        },
      },
      { path: 'user/:id', component: UserFormComponent },
      { path: 'user', component: UserFormComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserManagementRoutingModule {}
