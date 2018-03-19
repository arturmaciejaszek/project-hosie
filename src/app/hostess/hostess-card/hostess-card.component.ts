import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hostess-card',
  templateUrl: './hostess-card.component.html',
  styleUrls: ['./hostess-card.component.scss']
})
export class HostessCardComponent implements OnInit, OnChanges {
  @Input() hostess: any;
  @Input() info: string[];
  @Input() thumb: string;
  @Input() btn: string;
  @Input() editable = false;
  link: string;
  button: string;
  eyes: string[];
  hairColors: string[];

  constructor() {
   }

  ngOnInit() {
    this.eyes = ['brown', 'blue', 'green', 'hazel', 'grey' ];
    this.hairColors = ['light-blonde', 'dark-blonde', 'ginger', 'brown', 'black'];
  }

  save() {
    return false;
  }

  ngOnChanges() {
      switch (this.btn) {
        case 'edit':
          this.button = 'Edit profile';
          this.link = 'edit';
          break;
        case 'invite':
          this.button = 'Edit profile';
          this.link = 'invite';
          break;
        case 'profile':
          this.button = 'Edit profile';
          this.link = `${this.hostess.uid}`;
          break;
        default:
          return;
      }
    }

}
