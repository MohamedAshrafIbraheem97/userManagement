import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { PERMISSIONS, SharedId, User } from '../models/user.model';
import { environment } from 'src/environments/environment.development';
import { Endpoints } from 'src/app/core/endpoints/endpoints.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(environment.baseUrl + Endpoints.allUser);
  }

  saveUser(user: User) {
    return this.httpClient.post(environment.baseUrl + Endpoints.newUser, user);
  }

  updateUser(user: User) {
    return this.httpClient.put(
      environment.baseUrl + Endpoints.updateUser + user.id,
      user
    );
  }

  getUserById(userId: SharedId): Observable<User> {
    return this.httpClient
      .get<User>(environment.baseUrl + Endpoints.singleUser + userId.id)
      .pipe(
        map((user) => {
          const alteredUser: User = {
            ...user,
            permission: user.permission as PERMISSIONS,
          };
          return alteredUser;
        })
      );
  }

  deleteUserById(userId: SharedId) {
    return this.httpClient.delete(
      environment.baseUrl + Endpoints.updateUser + userId.id
    );
  }
}
