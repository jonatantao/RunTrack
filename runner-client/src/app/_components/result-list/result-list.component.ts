import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Result } from 'src/app/_model/result';
import { ResultService } from 'src/app/_services/result.service';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit {
  results: Result[];

  constructor(private resultService: ResultService,
    private router: Router) { }

    ngOnInit(): void {
      this.reloadData();
    }

    getResult(){
      this.resultService.getResult().subscribe(data => {
        this.results = data;
      });
    }

    updateResult(id: number){
      this.router.navigate(['update-result', id]);
    }

    createResult(){
      this.router.navigate(['create-result']);
    }

    deleteResult(id: number){
      this.resultService.deleteResult(id).subscribe(data =>{
        console.log(data);
        this.reloadData();
      })
    }

    reloadData() {
      this.resultService.getResult();
    }
}
