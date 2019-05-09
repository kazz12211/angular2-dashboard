import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: any[] = [
    {uniqueName: 'ktsubaki', name: 'Kazuo Tsubaki', email: 'kazz12211@gmail.com', joined: '2019-03-03'},
    {uniqueName: 'user1', name: 'User 1', email: 'user1@gmail.com', joined: '2019-03-08'},
    {uniqueName: 'user2', name: 'User 2', email: 'user2@gmail.com', joined: '2019-03-15'},
    {uniqueName: 'user3', name: 'User 3', email: 'user3@gmail.com', joined: '2019-03-25'},
    {uniqueName: 'user4', name: 'User 4', email: 'user4@gmail.com', joined: '2019-03-29'},
    {uniqueName: 'user5', name: 'User 5', email: 'user5@gmail.com', joined: '2019-04-03'}
  ];

  constructor() { }

  getUsers(): Observable<any[]> {
    return of(this.users);
  }
}
