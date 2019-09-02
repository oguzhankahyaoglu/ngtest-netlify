import { Injectable } from '@angular/core';
import { HttpEvent, HttpRequest, HttpResponse, HttpInterceptor, HttpHandler, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { startWith, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        req.headers.append("Authorization", "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjkxRkRENEVCRDYwNjMxNURFREI4MENEMDkzMERFRkZBMjFEREE2NkIiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJrZjNVNjlZR01WM3R1QXpRa3czdi1pSGRwbXMifQ.eyJuYmYiOjE1Njc0MzYwMjcsImV4cCI6MTU3MDAyODAyNywiaXNzIjoiaHR0cDovL2Ntcy5va2FoeWFvZ2x1Lm5ldC9pZGVudGl0eS1zZXJ2ZXIiLCJhdWQiOlsiaHR0cDovL2Ntcy5va2FoeWFvZ2x1Lm5ldC9pZGVudGl0eS1zZXJ2ZXIvcmVzb3VyY2VzIiwic3F1aWRleC1hcGkiXSwiY2xpZW50X2lkIjoib2thaHlhb2dsdW5ldDpkZWZhdWx0Iiwic2NvcGUiOlsic3F1aWRleC1hcGkiXX0.ZiIYEfqTvQveNRFRDPO0LchFDiAZc5qP3yxl8DXkZL6CoxXqJMH_BF8p9xKHeNgGPdFJJyM5zkNtQOzhkA5eQA37hB9IIc53y8Fs-q4bDlrO_8IhdZN9vCetXCCpC-Jt_8wLEGgB9XGpCYdNJ-AffuUJK6A25EpatqLUgCZT-ltwzHxMTC0hmn2FPG-SDVCfKFq1Sfls-3TjwkR3Iowvq8BgYJeZvxUN9GmHu5TLfv9jX6b1Ht6SDIUCP_u8K3vOAcgwWcvDqOBbEr0FG_kjlYX1vesaqa_rLGrBmCur1Xy-FKNmIDYwamsyd_ndrURjf0qBD65RSyCm8Er2ixtEog");
        return this.sendRequest(req, next);
    }

    sendRequest(
        req: HttpRequest<any>,
        next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            tap(event => {

            })
        );
    }
}