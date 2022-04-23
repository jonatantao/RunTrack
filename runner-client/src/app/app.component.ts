import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';
import { Router } from '@angular/router';
import { UserService } from './_services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private roles: string[];
  isLoggedIn = false;
  showAdmin = false;
  showUser = false;
  username: string;

  constructor(private tokenStorageService: TokenStorageService, private router: Router) { }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdmin = this.roles.includes('ROLE_ADMIN');
      this.showUser = this.roles.includes('ROLE_USER');

      this.username = user.username;
    }
  }

  goToUsers(){
    this.router.navigate(['users']);
  }

  goToCompetition(){
    this.router.navigate(['competitions']);
  }

  goToOrganizer(){
    this.router.navigate(['organizers']);
  }

  goToResult(){
    this.router.navigate(['results']);
  }

  goToRunner(){
    this.router.navigate(['runners']);
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
