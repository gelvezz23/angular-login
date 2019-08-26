import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UserModel } from 'src/app/core/models/user.model';
import { LoginObject } from './login-object.model';
import { Session } from 'src/app/core/models/session.model';
import { map } from "rxjs/operators";
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<UserModel>;
    public currentUser: Observable<UserModel>;

    constructor (private http:HttpClient) { 
        this.currentUserSubject = new BehaviorSubject<UserModel>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
     }

    public get currentUserValue(): UserModel {
        return this.currentUserSubject.value;
    }

    getCurrentUser () {
        return localStorage.getItem('currentUser');
    }

    getUsuid () {
        return localStorage.getItem('usuid');
    }

    login (loginObj:LoginObject) {
        return this.http.post("http://localhost:8888/APIPRUEBA1-master/Login.php", loginObj).pipe(
            map(resp => {
                console.log("Entró en el mapa");
                localStorage.setItem('currentUser', JSON.stringify(resp[0]['user']))
                localStorage.setItem('usuid', JSON.stringify(resp[0]['usuid']))
                return resp;
            })
        );
    }

    logout () {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }

    registro (user:UserModel) {
        return this.http.post("http://localhost:8888/APIPRUEBA1-master/CrearUsuario.php", user);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body;
    }

}