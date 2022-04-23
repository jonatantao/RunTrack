import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { AdminComponent } from './admin/admin.component';
import { CompetitionListComponent } from './_components/competition-list/competition-list.component';
import { CompetitionEditComponent } from './_components/competition-edit/competition-edit.component';
import { CompetitionAddComponent } from './_components/competition-add/competition-add.component';
import { OrganizerListComponent } from './_components/organizer-list/organizer-list.component';
import { OrganizerEditComponent } from './_components/organizer-edit/organizer-edit.component';
import { OrganizerAddComponent } from './_components/organizer-add/organizer-add.component';
import { ResultListComponent } from './_components/result-list/result-list.component';
import { ResultEditComponent } from './_components/result-edit/result-edit.component';
import { ResultAddComponent } from './_components/result-add/result-add.component';
import { RunnerListComponent } from './_components/runner-list/runner-list.component';
import { RunnerEditComponent } from './_components/runner-edit/runner-edit.component';
import { RunnerAddComponent } from './_components/runner-add/runner-add.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'users', component: UserComponent },
  { path: 'update-user/:id', component: UserUpdateComponent },
  { path: 'create-user', component: UserCreateComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'competitions', component: CompetitionListComponent },
  { path: 'update-competition/:id', component: CompetitionEditComponent },
  { path: 'create-competition', component: CompetitionAddComponent },
  { path: 'organizers', component: OrganizerListComponent },
  { path: 'update-organizer/:id', component: OrganizerEditComponent },
  { path: 'create-organizer', component: OrganizerAddComponent },
  { path: 'results', component: ResultListComponent },
  { path: 'update-result/:id', component: ResultEditComponent },
  { path: 'create-result', component: ResultAddComponent },
  { path: 'runners', component: RunnerListComponent },
  { path: 'update-runner/:id', component: RunnerEditComponent },
  { path: 'create-runner', component: RunnerAddComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
