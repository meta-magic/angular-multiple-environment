import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { APP_URL } from "../constants/appurls";
import { UserModel } from "../models/user.model";

@Component({
    selector: 'user',
    templateUrl: 'user.component.html'
})
export class UserComponent implements OnInit {

    users: UserModel[];
    
    enviorment : string;

    constructor(private http: HttpClient) {
        this.users = [];
    }

    ngOnInit() {
        this.http.get(APP_URL.user).subscribe(
            (resp: any) => {
                debugger;
                this.users = resp.data;
                this.enviorment = resp.enviorment;
            }
        );
    }

}