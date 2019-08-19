import { Component, OnInit } from '@angular/core';
import User from '../models/user.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../shared/services/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: User;
  updateSubs: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UsersService
  ) { }

  ngOnInit() {
    const { id } = this.route.snapshot.params;
    this.userService.getUser(parseInt(id)).subscribe((userResponse:User) => {
      this.user = userResponse
      console.log(this.user);
    });

  }

  onSubmit(user: User){
    this.updateSubs = this.userService.updateUser(user).subscribe(() => {
      this.router.navigate(['/users']);
    });
  }

  ngOnDestroy(){
    if(this.updateSubs){
      this.updateSubs.unsubscribe();
    }
  }

}
