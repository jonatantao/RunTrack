import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { CompetitionService } from 'src/app/_services/competition.service';
import {Competition} from '../../_model/Competition';

@Component({
  selector: 'app-competition-edit',
  templateUrl: './competition-edit.component.html',
  styleUrls: ['./competition-edit.component.css']
})
export class CompetitionEditComponent implements OnInit {

  id: number;
  competition: Competition;
  constructor(private competitionService: CompetitionService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;

    this.competitionService.getCompetitionById(this.id).subscribe(data => {
      this.competition = data;
    }, error => console.log(error));
  }

  onSubmit() {
    this.competitionService.updateCompetition(this.id, this.competition).subscribe( data => {
        this.goToCompetitionList();
      }
      , error => console.log(error));
  }

  goToCompetitionList() {
    this.router.navigate(['competitions']);
  }

  createCompetition() {
    this.router.navigate(['create-competition']);
  }

}
