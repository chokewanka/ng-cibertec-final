import { Route } from '@angular/router';
import { ListUserComponent } from './views/users/list-user/list-user.component';
import { CreateUserComponent } from './views/users/create-user/create-user.component';
import { EditUserComponent } from './views/users/edit-user/edit-user.component';


export const routes:Route[] = [
    {
        path: 'users',
        component: ListUserComponent
    },
    {
        path: 'users/create',
        component: CreateUserComponent
    },
    {
        path: 'users/:id',
        component: EditUserComponent
    },
    {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full'
    }
];