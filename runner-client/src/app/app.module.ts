import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './profile/profile.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { CompetitionListComponent } from './_components/competition-list/competition-list.component';
import { CompetitionEditComponent } from './_components/competition-edit/competition-edit.component';
import { CompetitionAddComponent } from './_components/competition-add/competition-add.component';
import { OrganizerListComponent } from './_components/organizer-list/organizer-list.component';
import { OrganizerEditComponent } from './_components/organizer-edit/organizer-edit.component';
import { OrganizerAddComponent } from './_components/organizer-add/organizer-add.component';
import { ResultListComponent } from './_components/result-list/result-list.component';
import { ResultAddComponent } from './_components/result-add/result-add.component';
import { ResultEditComponent } from './_components/result-edit/result-edit.component';
import { RunnerAddComponent } from './_components/runner-add/runner-add.component';
import { RunnerListComponent } from './_components/runner-list/runner-list.component';
import { RunnerEditComponent } from './_components/runner-edit/runner-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AdminComponent,
    UserComponent,
    ProfileComponent,
    UserCreateComponent,
    UserUpdateComponent,
    CompetitionListComponent,
    CompetitionEditComponent,
    CompetitionAddComponent,
    OrganizerListComponent,
    OrganizerEditComponent,
    OrganizerAddComponent,
    ResultListComponent,
    ResultAddComponent,
    ResultEditComponent,
    RunnerAddComponent,
    RunnerListComponent,
    RunnerEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
