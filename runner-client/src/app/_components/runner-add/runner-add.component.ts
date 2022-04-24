import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Runner } from 'src/app/_model/Runner';
import { RunnerService } from 'src/app/_services/runner.service';

@Component({
  selector: 'app-runner-add',
  templateUrl: './runner-add.component.html',
  styleUrls: ['./runner-add.component.css']
})
export class RunnerAddComponent implements OnInit {

  runner: Runner = new Runner();

  constructor(private runnerService: RunnerService,
    private router: Router) { }

    ngOnInit(): void {
    }
  
    saveRunner(){
      this.runnerService.createRunner(this.runner).subscribe( data =>{
        console.log(data);
        this.goToRunnerList();
      },
      error => console.log(error));
    }
  
    goToRunnerList(){
      this.router.navigate(['runners']);
    }
  
    createRunner(){
      this.router.navigate(['create-runner']);
    }
    
    onSubmit(){
      console.log(this.runner);
      this.saveRunner();
    }
}
