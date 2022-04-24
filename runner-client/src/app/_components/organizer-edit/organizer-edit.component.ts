import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrganizerService } from 'src/app/_services/organizer.service';

@Component({
  selector: 'app-organizer-edit',
  templateUrl: './organizer-edit.component.html',
  styleUrls: ['./organizer-edit.component.css']
})
export class OrganizerEditComponent implements OnInit {

  constructor(private organizerService: OrganizerService,
    private router: Router) { }

  ngOnInit() {
  }

}
