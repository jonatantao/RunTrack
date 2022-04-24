import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Competition } from 'src/app/_model/competition';
import { CompetitionService } from 'src/app/_services/competition.service';

@Component({
  selector: 'app-competition-add',
  templateUrl: './competition-add.component.html',
  styleUrls: ['./competition-add.component.css']
})
export class CompetitionAddComponent implements OnInit {

  competition: Competition = new Competition();

  constructor(private competitionService: CompetitionService,
    private router: Router) { }

    ngOnInit(): void {
    }
  
    saveCompetition(){
      this.competitionService.createCompetition(this.competition).subscribe( data =>{
        console.log(data);
        this.goToCompetitionList();
      },
      error => console.log(error));
    }
  
    goToCompetitionList(){
      this.router.navigate(['competitions']);
    }
  
    createUser(){
      this.router.navigate(['create-competition']);
    }
    
    onSubmit(){
      console.log(this.competition);
      this.saveCompetition();
    }
}
