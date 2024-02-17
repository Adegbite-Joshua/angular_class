import { Routes } from '@angular/router';
import { BehaviorSignUpComponent } from './behavior-sign-up/behavior-sign-up.component';
import { BehaviourSubjectParentComponent } from './behaviour-subject-parent/behaviour-subject-parent.component';
import { HomeComponent } from './home/home.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './student/signin/signin.component';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'create_account', component: SignupComponent},
    {path: 'templatedrivenform', component: TemplatedrivenformComponent},
    {path: 'reactiveform', component: ReactiveformComponent},
    {path: 'params/:id', component: SigninComponent},
    {path: 'behaviour_subject', component: BehaviourSubjectParentComponent},
    {path: 'behaviour_sign_up', component: BehaviorSignUpComponent},

];
