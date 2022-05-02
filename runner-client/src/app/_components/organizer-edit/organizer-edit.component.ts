import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { OrganizerService } from 'src/app/_services/organizer.service';
import {Organizer} from '../../_model/Organizer';

@Component({
  selector: 'app-organizer-edit',
  templateUrl: './organizer-edit.component.html',
  styleUrls: ['./organizer-edit.component.css']
})
export class OrganizerEditComponent implements OnInit {

  id: number;
  organizer: Organizer;
  constructor(private organizerService: OrganizerService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;

    this.organizerService.getOrganizerById(this.id).subscribe(data => {
      this.organizer = data;
    }, error => console.log(error));
  }

  onSubmit() {
    this.organizerService.updateOrganizer(this.id, this.organizer).subscribe( data => {
        this.goToOrganizerList();
      }
      , error => console.log(error));
  }

  goToOrganizerList() {
    this.router.navigate(['organizers']);
  }

  createOrganizer() {
    this.router.navigate(['create-organizer']);
  }

}
