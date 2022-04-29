import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Competition } from 'src/app/_model/competition';
import { CompetitionService } from 'src/app/_services/competition.service';

@Component({
  selector: 'app-competition-list',
  templateUrl: './competition-list.component.html',
  styleUrls: ['./competition-list.component.css']
})
export class CompetitionListComponent implements OnInit {

  competitions: Competition[];

  constructor(private competitionService: CompetitionService,
              private router: Router) { }

    ngOnInit(): void {
      this.reloadData();
    }

    getCompetition() {
      this.competitionService.getCompetitions().subscribe(data => {
        this.competitions = data;
      });
    }

    updateCompetition(id: number) {
      this.router.navigate(['update-competition', id]);
    }

    createCompetition() {
      this.router.navigate(['create-competition']);
    }

    deleteCompetition(id: number) {
      this.competitionService.deleteCompetition(id).subscribe(data => {
        console.log(data);
        this.reloadData();
      });
    }

    reloadData() {
      this.competitionService.getCompetitions();
    }

}
