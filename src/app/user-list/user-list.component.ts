import {CommonModule} from '@angular/common';
import { Component, Input } from '@angular/core';
import {User} from 'src/user';
import {UserListItemComponent} from '../user-list-item/user-list-item.component';

@Component({
  selector: 'user-list',
  standalone: true,
  templateUrl: './user-list.component.html',
  imports: [CommonModule, UserListItemComponent]
})
export class UserListComponent {
  @Input()
  users!: User[];
}
