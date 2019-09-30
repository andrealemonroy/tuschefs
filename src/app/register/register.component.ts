import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService } from '../services/alert.service';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';

// import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase';

import { NgbDatepickerConfig, NgbCalendar, NgbDate, NgbDateStruct, NgbDateAdapter, NgbDateNativeAdapter } from '@ng-bootstrap/ng-bootstrap';

import { AuthService } from '../services/auth.service'
import { User } from 'app/register';

@Component({ templateUrl: 'register.component.html' })
export class RegisterComponent implements OnInit {
    user: User;
    registerForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private alertService: AlertService,
        public authService: AuthService,
        config: NgbDatepickerConfig, calendar: NgbCalendar
        // private af: AngularFireAuth
    ) {

        config.minDate = { year: 1900, month: 1, day: 1 };
        config.maxDate = calendar.getToday();

        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            first_name: ['', Validators.required],
            date_birthday: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit(form: NgForm) {
        this.userService.register(form.value)
            .subscribe((data: any) => {
                if (data.success == true) {
                    console.log(data + 'success')
                }
                else { console.log(data) }
            })
        // this.submitted = true;

        // // stop here if form is invalid
        // if (this.registerForm.invalid) {
        //     return;
        // }

        // this.loading = true;
        // this.userService.register(this.registerForm.value)
        //     .pipe(first())
        //     .subscribe(
        //         data => {
        //             this.alertService.success('Registration successful', true);
        //             this.router.navigate(['/login']);
        //         },
        //         error => {
        //             this.alertService.error(error);
        //             this.loading = false;
        //         });
    }

    loginFacebook() {
        // this.af.auth.signInWithPopup(new auth.FacebookAuthProvider());
    }
}

export class NgbdDatepickerAdapter {

    model1: Date;
    model2: Date;

}