import { Component, OnInit, Input } from '@angular/core';

import { Hostess } from './../../auth/user.model';

@Component({
  selector: 'app-hostess-info',
  templateUrl: './hostess-info.component.html',
  styleUrls: ['./hostess-info.component.scss']
})
export class HostessInfoComponent implements OnInit {
  @Input() hostess: Hostess;
  @Input() info: string[];
  @Input() editable = false;
  hairColors: string[];

  constructor() { }

  ngOnInit() {
    this.hairColors = ['light-blonde', 'dark-blonde', 'ginger', 'brown', 'black'];
  }

}
