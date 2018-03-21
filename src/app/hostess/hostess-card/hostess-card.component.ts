import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { AngularFireStorage } from 'angularfire2/storage';
import { MatDialog } from '@angular/material';

import { Hostess } from './../../auth/user.model';
import { CropComponent } from './crop/crop.component';

@Component({
  selector: 'app-hostess-card',
  templateUrl: './hostess-card.component.html',
  styleUrls: ['./hostess-card.component.scss']
})
export class HostessCardComponent implements OnInit, OnChanges {
  @Input() hostess: Hostess;
  @Input() thumb: string;
  @Input() btn: string;
  @Input() editable = false;
  link: string;
  button: string;

  constructor(private afs: AngularFireStorage, private dialog: MatDialog) {
   }

  ngOnInit() {
  }

  uploadThumb(e) {
    this.dialog.open(CropComponent, {data: {
      file: e.target.files[0],
      uid: this.hostess.uid
    }});
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
