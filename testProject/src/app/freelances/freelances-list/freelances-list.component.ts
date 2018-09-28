import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Freelance } from '../freelance.model'

@Component({
  selector: 'app-freelances-list',
  templateUrl: './freelances-list.component.html',
  styleUrls: ['./freelances-list.component.css']
})
export class FreelancesListComponent implements OnInit {

  freelances: Freelance[] = [
    new Freelance('John', 'Lead Dev', 'I have been a fullstack developper for more than 3 years now. I\'ve worked on many missions already and manage lots of teams...','https://placeimg.com/150/100/people/sepia', 1000),

    new Freelance('Stefany', 'Marketing Manager', 'I have got 3 years of experience in Marketing and Sales, I have worked with many luxurious brands such as Dior or Chanel.','https://placeimg.com/150/100/people/sepia', 750),

    new Freelance('Arthur', 'Intern', 'Freshly graduated, I have been working on many projects of my own and I am looking for a first freelance mission','https://placeimg.com/150/100/people/sepia', 150),

    new Freelance('James', 'CTO', 'As a CTO of a tech company, I also gives part time lessons and coaching to young entrepreners to set-up their new working environment','https://placeimg.com/150/100/people/sepia', 600),

    new Freelance('Alexa', 'Account Manager', 'Solid experience in accounting and treasury', 'https://placeimg.com/150/100/people/sepia', 200),
  ];

  @Output() freelanceWasSelected = new EventEmitter<Freelance>();

  constructor() { }

  ngOnInit() {
  }

  onFreelanceSelected(freelance: Freelance) {
    this.freelanceWasSelected.emit(freelance);
  }

}
