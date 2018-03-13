import { AuthData } from './../../auth-data.model';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../../app.reducer';
import { AuthService } from './../../auth.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  isLoading$: Observable<boolean>;
  clientForm: FormGroup;

  constructor(private authService: AuthService, private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.formInit();
    this.isLoading$ = this.store.select(fromRoot.getIsLoading);
  }


  onSubmit() {
    const auth: AuthData = {
      email: this.clientForm.value.email,
      password: this.clientForm.value.password,
    };
    const data: any = {
      name: this.clientForm.value.name,
      access: 'c',
      cName: this.clientForm.value.cName,
      address: this.clientForm.value.address,
      nip: this.clientForm.value.nip,
      postal: this.clientForm.value.postal,
      city: this.clientForm.value.city,
      country: this.clientForm.value.country,
    };
    this.authService.register(auth, data);
  }

  private formInit() {
    this.clientForm = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl('', {
        validators: [Validators.required, Validators.minLength(6)]
      }),
      cPassword: new FormControl('', {
        validators: [Validators.required, Validators.minLength(6)]
      }),
      name: new FormControl('', {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      terms: new FormControl('', {
        validators: Validators.requiredTrue
      }),
      cName: new FormControl('', {
        validators: [Validators.required]
      }),
      nip: new FormControl('', {
        validators: [Validators.required, Validators.pattern(/^[0-9]{10}$/)]
      }),
      address: new FormControl('', {
        validators: [Validators.required]
      }),
      postal: new FormControl('', {
        validators: [Validators.required]
      }),
      city: new FormControl('', {
        validators: [Validators.required]
      }),
      country: new FormControl('', {
        validators: [Validators.required]
      })
    }, this.passwordValidator);
  }

  private passwordValidator(form: FormGroup) {
    return form.get('password').value === form.get('cPassword').value ? null : {'mismatch': true};
  }

}
