import {HttpClient} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {map, Observable} from 'rxjs';
import {User} from 'src/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly http = inject(HttpClient);

  getUsers(): Observable<User[]> {
    return this.http
      .get<{ data: User[]}>("https://reqres.in/api/users")
      .pipe(
        map(resp => resp.data)
      )
  }
}
