import { Component, OnInit, Input } from '@angular/core';
import { Freelance } from '../freelance.model';

@Component({
  selector: 'app-freelance-detail',
  templateUrl: './freelance-detail.component.html',
  styleUrls: ['./freelance-detail.component.css']
})
export class FreelanceDetailComponent implements OnInit {

  @Input() freelance: Freelance;

  constructor() { }

  ngOnInit() {
  }

}
