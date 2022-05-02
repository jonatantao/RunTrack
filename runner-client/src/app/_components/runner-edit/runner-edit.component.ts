import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { RunnerService } from 'src/app/_services/runner.service';
import {Runner} from '../../_model/Runner';

@Component({
  selector: 'app-runner-edit',
  templateUrl: './runner-edit.component.html',
  styleUrls: ['./runner-edit.component.css']
})
export class RunnerEditComponent implements OnInit {

  id: number;
  runner: Runner;
  constructor(private runnerService: RunnerService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;

    this.runnerService.getRunnerById(this.id).subscribe(data => {
      this.runner = data;
    }, error => console.log(error));
  }

  onSubmit() {
    this.runnerService.updateRunner(this.id, this.runner).subscribe( data => {
        this.goToRunnerList();
      }
      , error => console.log(error));
  }

  goToRunnerList() {
    this.router.navigate(['runners']);
  }

  createRunner() {
    this.router.navigate(['create-runner']);
  }

}
