import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FreelancesComponent } from './freelances/freelances.component';
import { FreelanceDetailComponent } from './freelances/freelance-detail/freelance-detail.component';
import { CompaniesComponent } from './companies/companies.component';
import { CompanyDetailComponent } from './companies/company-detail/company-detail.component';
import { FreelancesListComponent } from './freelances/freelances-list/freelances-list.component';
import { FreelanceItemComponent } from './freelances/freelances-list/freelance-item/freelance-item.component';
import { CompaniesListComponent } from './companies/companies-list/companies-list.component';
import { CompanyItemComponent } from './companies/companies-list/company-item/company-item.component';

/* IMPORT LOCALE DATA FROM SPECIFIED LANGUAGE */
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeFrExtra from '@angular/common/locales/extra/fr';

registerLocaleData(localeFr, 'fr', localeFrExtra);


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FreelancesComponent,
    FreelanceDetailComponent,
    CompaniesComponent,
    CompanyDetailComponent,
    FreelancesListComponent,
    FreelanceItemComponent,
    CompaniesListComponent,
    CompanyItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
