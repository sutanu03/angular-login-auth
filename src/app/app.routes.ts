import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {
        redirectTo:"login",
        path:"",
        pathMatch:"full"
    },
    {
        component:LoginComponent,
        path:"login"
    },
    {
        component:DashboardComponent,
        path:"dashboard"
    }
];
