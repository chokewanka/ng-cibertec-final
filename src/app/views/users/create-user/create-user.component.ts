import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsersService } from '../shared/services/users.service';
import { Router } from '@angular/router';
import User from '../models/user.model';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  createSubs:Subscription;

  constructor(
    private userService: UsersService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(user: User){
    this.createSubs = this.userService.createUser(user).subscribe((user:User) => {
      this.router.navigate(['/users']);
    });
  }

  ngOnDestroy(){
    if (this.createSubs){
      this.createSubs.unsubscribe();
    }
  }

}
