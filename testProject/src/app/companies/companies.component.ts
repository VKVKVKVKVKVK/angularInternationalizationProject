import { Component, OnInit } from '@angular/core';
import { Company } from './company.model';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  selectedCompany: Company;

  constructor() { }

  ngOnInit() {
  }

}
