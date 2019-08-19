import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/services/users.service';
import User from '../models/user.model';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  allUsers: User[];

  constructor(
    private userService: UsersService
  ) { }

  ngOnInit() {
    console.log(this.userService);
    this.userService.getUsers().subscribe((users: User[]) => {
      this.allUsers = users;
    })
  }

  onRemove(id: number){
    this.userService.deleteUser(id).subscribe((response) => {
      this.allUsers = this.allUsers.filter(user => user.id !== id);
    });
  }

}
