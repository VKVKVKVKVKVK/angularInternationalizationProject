import { Component, OnInit } from '@angular/core';
import { Freelance } from './freelance.model';

@Component({
  selector: 'app-freelances',
  templateUrl: './freelances.component.html',
  styleUrls: ['./freelances.component.css']
})
export class FreelancesComponent implements OnInit {

  selectedFreelance: Freelance;

  constructor() { }

  ngOnInit() {
  }

}
