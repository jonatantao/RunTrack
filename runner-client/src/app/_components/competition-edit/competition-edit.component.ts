import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompetitionService } from 'src/app/_services/competition.service';

@Component({
  selector: 'app-competition-edit',
  templateUrl: './competition-edit.component.html',
  styleUrls: ['./competition-edit.component.css']
})
export class CompetitionEditComponent implements OnInit {

  constructor(private competitionService: CompetitionService,
    private router: Router) { }

  ngOnInit() {
  }

}
