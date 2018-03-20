import { Component, OnInit, Inject, ViewChild} from '@angular/core';

import { AngularFireStorage } from 'angularfire2/storage';
import { MAT_DIALOG_DATA } from '@angular/material';

import { ImageCropperComponent, CropperSettings } from 'ng2-img-cropper';

@Component({
  selector: 'app-crop',
  templateUrl: './crop.component.html',
  styleUrls: ['./crop.component.scss']
})
export class CropComponent implements OnInit {
  @ViewChild('cropper', undefined) cropper;
  data: any;
  cropperSettings: CropperSettings;

  constructor(@Inject(MAT_DIALOG_DATA) private img: { file: File, uid: string }, private afs: AngularFireStorage) {

    this.cropperSettings = new CropperSettings();
        this.cropperSettings.noFileInput = true;
        this.cropperSettings.width = 248;
        this.cropperSettings.height = 248;
        this.cropperSettings.croppedWidth = 248;
        this.cropperSettings.croppedHeight = 248;
        this.cropperSettings.canvasWidth = 600;
        this.cropperSettings.canvasHeight = 450;

        this.data = {};
   }

  ngOnInit() {
    const image: any = new Image();
    const file: File = this.img.file;
    const myReader: FileReader = new FileReader();
    const that = this;
    myReader.onloadend = function (loadEvent: any) {
        image.src = loadEvent.target.result;
        that.cropper.setImage(image);
    };

    myReader.readAsDataURL(file);
  }

  upload() {
    const filePath = `/${this.img.uid}/thumb`;
    const img = this.convertToBlob(this.data.image);
    this.afs.upload(filePath, img)
      .then( res => console.log(res))
      .catch( err => console.log(err));
  }

  convertToBlob(base64Str: string) {
    const binary = atob(base64Str.split(',')[1]);
    const array = [];
    for (let i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }

    return new Blob([new Uint8Array(array)], {type: 'image/jpeg'});
  }

}
