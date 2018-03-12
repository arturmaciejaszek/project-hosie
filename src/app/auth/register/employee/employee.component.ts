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

  constructor(private authService: AuthService, private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.formInit();
    this.isLoading$ = this.store.select(fromRoot.getIsLoading);
  }

  onSubmit() {
    this.authService.register({
      email: this.employeeForm.value.email,
      password: this.employeeForm.value.password,
      name: this.employeeForm.value.name,
      access: 'employee'
    });
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
      terms: new FormControl('', {
        validators: Validators.requiredTrue
      })
    }, this.passwordValidator);
  }

  private passwordValidator(form: FormGroup) {
    return form.get('password').value === form.get('cPassword').value ? null : {'mismatch': true};
  }

}
