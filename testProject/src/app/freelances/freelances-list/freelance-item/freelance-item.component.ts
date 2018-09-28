import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Freelance } from '../../freelance.model';

@Component({
  selector: 'app-freelance-item',
  templateUrl: './freelance-item.component.html',
  styleUrls: ['./freelance-item.component.css']
})
export class FreelanceItemComponent implements OnInit {

  @Input() freelance: Freelance;
  @Output() freelanceSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }
  onSelected() {
    this.freelanceSelected.emit();
  }

}
