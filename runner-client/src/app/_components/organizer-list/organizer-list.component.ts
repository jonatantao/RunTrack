import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Organizer } from 'src/app/_model/organizer';
import { OrganizerService } from 'src/app/_services/organizer.service';

@Component({
  selector: 'app-organizer-list',
  templateUrl: './organizer-list.component.html',
  styleUrls: ['./organizer-list.component.css']
})
export class OrganizerListComponent implements OnInit {
  organizers: Organizer[];

  constructor(private organizerService: OrganizerService,
    private router: Router) { }

    ngOnInit(): void {
      this.reloadData();
    }
  
    getOrganizers(){
      this.organizerService.getOrganizers().subscribe(data => {
        this.organizers = data;
      });
    }
  
    updateOrganizer(id: number){
      this.router.navigate(['update-organizer', id]);
    }
  
    createOrganizer(){
      this.router.navigate(['create-organizer']);
    }
  
    deleteOrganizer(id: number){
      this.organizerService.deleteOrganizer(id).subscribe(data =>{
        console.log(data);
        this.reloadData();
      })
    }
  
    reloadData() {
      this.organizerService.getOrganizers();
    }
}
