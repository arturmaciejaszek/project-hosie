import { AuthData } from './../../auth-data.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../../app.reducer';
import { AuthService } from './../../auth.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  isLoading$: Observable<boolean>;
  employeeForm: FormGroup;
  maxDate;

  constructor(private authService: AuthService, private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.formInit();
    this.isLoading$ = this.store.select(fromRoot.getIsLoading);
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  onSubmit() {
    const auth: AuthData = {
      email: this.employeeForm.value.email,
      password: this.employeeForm.value.password,
    };
    const data: any = {
      name: this.employeeForm.value.name,
      birthdate: this.employeeForm.value.birthdate,
      access: 'h'
    };
    this.authService.register(auth, data);
  }

  private formInit() {
    this.employeeForm = new FormGroup({
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
      birthdate: new FormControl('', {
        validators: [Validators.required]
      }),
      terms: new FormControl('', {
        validators: Validators.requiredTrue
      })
    }, this.passwordValidator);
  }

  private passwordValidator(form: FormGroup) {
    return form.get('password').value === form.get('cPassword').value ? null : {'mismatch': true};
  }

}
