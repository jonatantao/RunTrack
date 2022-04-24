import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RunnerService } from 'src/app/_services/runner.service';

@Component({
  selector: 'app-runner-edit',
  templateUrl: './runner-edit.component.html',
  styleUrls: ['./runner-edit.component.css']
})
export class RunnerEditComponent implements OnInit {

  constructor(private runnerService: RunnerService,
    private router: Router) { }

  ngOnInit() {
  }

}
