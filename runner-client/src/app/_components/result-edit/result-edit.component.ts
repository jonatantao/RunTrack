import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ResultService } from 'src/app/_services/result.service';
import {Result} from '../../_model/Result';

@Component({
  selector: 'app-result-edit',
  templateUrl: './result-edit.component.html',
  styleUrls: ['./result-edit.component.css']
})
export class ResultEditComponent implements OnInit {

  id: number;
  result: Result;
  constructor(private resultService: ResultService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;

    this.resultService.getResultById(this.id).subscribe(data => {
      this.result = data;
    }, error => console.log(error));
  }

  onSubmit() {
    this.resultService.updateResult(this.id, this.result).subscribe( data => {
        this.goToResultList();
      }
      , error => console.log(error));
  }

  goToResultList() {
    this.router.navigate(['results']);
  }

  createResult() {
    this.router.navigate(['create-result']);
  }

}
