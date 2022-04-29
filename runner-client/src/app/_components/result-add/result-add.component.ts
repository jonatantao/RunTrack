import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Result } from 'src/app/_model/result';
import { ResultService } from 'src/app/_services/result.service';

@Component({
  selector: 'app-result-add',
  templateUrl: './result-add.component.html',
  styleUrls: ['./result-add.component.css']
})
export class ResultAddComponent implements OnInit {

  result: Result = new Result();

  constructor(private resultService: ResultService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveResult(){
    this.resultService.createResult(this.result).subscribe( data =>{
        console.log(data);
        this.goToResultList();
      },
      error => console.log(error));
  }

  goToResultList(){
    this.router.navigate(['results']);
  }

  createResult(){
    this.router.navigate(['create-result']);
  }

  onSubmit(){
    console.log(this.result);
    this.saveResult();
  }
}
