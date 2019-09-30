import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth'

import { HttpClient } from '@angular/common/http'

interface myData {
    success: boolean,
    message: string
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private logStatus = false;

    constructor(public afAuth: AngularFireAuth, private http: HttpClient) { }

    FacebookAuth() {
        return this.AuthLogin(new auth.FacebookAuthProvider());
    }

    AuthLogin(provider) {
        return this.afAuth.auth.signInWithPopup(provider)
            .then((result) => {
                console.log('Logged');
                console.log(result);
            }).catch((error) => {
                console.log(error)
            })
    }

    setLoggedIn(value: boolean) {
        this.logStatus = value
    }

    get isLoggedIn() {
        return JSON.parse(localStorage.getItem('loggedIn') || this.logStatus.toString());
    }

    getUserDetails(email, password) {
        return this.http.post<myData>('https://chefs-test.herokuapp.com/v1/account/signin', {
            email,
            password
        })
    }

}
