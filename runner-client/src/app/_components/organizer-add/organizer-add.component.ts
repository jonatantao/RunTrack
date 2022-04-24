import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Organizer } from 'src/app/_model/organizer';
import { OrganizerService } from 'src/app/_services/organizer.service';

@Component({
  selector: 'app-organizer-add',
  templateUrl: './organizer-add.component.html',
  styleUrls: ['./organizer-add.component.css']
})
export class OrganizerAddComponent implements OnInit {

  organizer: Organizer = new Organizer();

  constructor(private organizerService: OrganizerService,
    private router: Router) { }

    ngOnInit(): void {
    }
  
    saveOrganizer(){
      this.organizerService.createOrganizer(this.organizer).subscribe( data =>{
        console.log(data);
        this.goToOrganizerList();
      },
      error => console.log(error));
    }
  
    goToOrganizerList(){
      this.router.navigate(['organizers']);
    }
  
    createOrganizer(){
      this.router.navigate(['create-organizer']);
    }
    
    onSubmit(){
      console.log(this.organizer);
      this.saveOrganizer();
    }
}
