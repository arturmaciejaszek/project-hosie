import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-hostess-card',
  templateUrl: './hostess-card.component.html',
  styleUrls: ['./hostess-card.component.scss']
})
export class HostessCardComponent implements OnInit {
  @Input() hostess: any;
  @Input() info: string[];
  @Input() thumb: string;
  @Input() btn: string;

  constructor() { }

  ngOnInit() {
  }

}
