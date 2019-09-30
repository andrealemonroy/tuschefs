import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../register';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    // getAll() {
    //     return this.http.get<User[]>(`/users`);
    // }

    // getById(id: number) {
    //     return this.http.get(`/users/` + id);
    // }

    register(user: User) {
        debugger;
        return this.http.post(`https://chefs-test.herokuapp.com/v1/account/signup/`, user);
        debugger;
    }

    // update(user: User) {
    //     return this.http.put(`/users/` + user.id, user);
    // }

    // delete(id: number) {
    //     return this.http.delete(`/users/` + id);
    // }
}