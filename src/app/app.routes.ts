import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { SignupComponent } from './signup/signup.component';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'create_account', component: SignupComponent},
    {path: 'templatedrivenform', component: TemplatedrivenformComponent},
    {path: 'reactiveform', component: ReactiveformComponent},

];
