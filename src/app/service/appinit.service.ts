import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { APP_URL } from '../constants/appurls';

@Injectable()
export class AppInitService {

    constructor(private httpClient: HttpClient) {

    }

    init(): Promise<any> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 500);
        });
    }

    loadUrls(): Promise<any> {
        const promise = this.httpClient.get('assets/config/environment.json')
            .toPromise()
            .then((env: any) => {
                debugger;
                APP_URL.product = env.settings.producturl;
                APP_URL.order = env.settings.orderurl;
                APP_URL.user = env.settings.userurl;
                return env;
            });
        return promise;
    }
}
