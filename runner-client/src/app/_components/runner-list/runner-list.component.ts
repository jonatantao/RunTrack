import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Runner } from 'src/app/_model/Runner';
import { RunnerService } from 'src/app/_services/runner.service';

@Component({
  selector: 'app-runner-list',
  templateUrl: './runner-list.component.html',
  styleUrls: ['./runner-list.component.css']
})
export class RunnerListComponent implements OnInit {
  runners: Runner[];

  constructor(private runnerService: RunnerService,
    private router: Router) { }

ngOnInit(): void {
    this.reloadData();
  }

  getRunners(){
    this.runnerService.getRunners().subscribe(data => {
      this.runners = data;
    });
  }

  updateRunner(id: number){
    this.router.navigate(['update-runner', id]);
  }

  createRunner(){
    this.router.navigate(['create-runner']);
  }

  deleteRunner(id: number){
    this.runnerService.deleteRunner(id).subscribe(data =>{
      console.log(data);
      this.reloadData();
    })
  }

  reloadData() {
    this.runnerService.getRunners();
  }

}
