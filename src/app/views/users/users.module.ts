import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UsersService } from './shared/services/users.service';
import { UserFormComponent } from './shared/forms/user-form/user-form.component';
import { ExperienceFormComponent } from './shared/forms/experience-form/experience-form.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { PhonePipe } from './shared/pipes/phone/phone.pipe';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  providers: [
    UsersService
  ],
  declarations: [
    UserFormComponent,
    ExperienceFormComponent,
    CreateUserComponent,
    EditUserComponent,
    ListUserComponent,
    PhonePipe
  ],
  exports: [
    ListUserComponent,
    CreateUserComponent,
    EditUserComponent
  ]
})
export class UsersModule { }
