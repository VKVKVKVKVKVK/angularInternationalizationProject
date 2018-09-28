import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Company } from '../company.model';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.css']
})
export class CompaniesListComponent implements OnInit {

  companies: Company[] = [
    new Company('Loréal', 200000, 'Leading company in the cosmetic industry', 'https://pbs.twimg.com/profile_images/948244445211832320/aEpVdMnO.jpg' ),

    new Company('BlaBlaCar', 450, 'Carpooling platform, #1 in the World', 'https://media.custplace.com/brands/brand_1386329051.png')
  ];

  @Output() companyWasSelected = new EventEmitter<Company>();

  constructor() { }

  ngOnInit() {
  }

  onCompanySelected(company: Company) {
    this.companyWasSelected.emit(company);
  }

}
