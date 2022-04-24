import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResultService } from 'src/app/_services/result.service';

@Component({
  selector: 'app-result-edit',
  templateUrl: './result-edit.component.html',
  styleUrls: ['./result-edit.component.css']
})
export class ResultEditComponent implements OnInit {

  constructor(private resultService: ResultService,
    private router: Router) { }

  ngOnInit() {
  }

}
