import {mergeMap as _observableMergeMap, catchError as _observableCatch} from 'rxjs/operators';
import {Observable, from as _observableFrom, throwError as _observableThrow, of as _observableOf} from 'rxjs';
import {Injectable, Inject, Optional, InjectionToken} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse, HttpResponseBase} from '@angular/common/http';

import * as moment from 'moment';


export class BaseClient {
  public static AUTH_TOKEN: string = "";
  private _http: HttpClient;

  constructor(http: HttpClient) {
    this._http = http;
  }

  transformOptions(options: any) {
    console.log("Options: " + JSON.stringify(options));
    if (BaseClient.AUTH_TOKEN != "") {
      options.headers = options.headers.append("Authorization", "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjkxRkRENEVCRDYwNjMxNURFREI4MENEMDkzMERFRkZBMjFEREE2NkIiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJrZjNVNjlZR01WM3R1QXpRa3czdi1pSGRwbXMifQ.eyJuYmYiOjE1Njc0MzYwMjcsImV4cCI6MTU3MDAyODAyNywiaXNzIjoiaHR0cDovL2Ntcy5va2FoeWFvZ2x1Lm5ldC9pZGVudGl0eS1zZXJ2ZXIiLCJhdWQiOlsiaHR0cDovL2Ntcy5va2FoeWFvZ2x1Lm5ldC9pZGVudGl0eS1zZXJ2ZXIvcmVzb3VyY2VzIiwic3F1aWRleC1hcGkiXSwiY2xpZW50X2lkIjoib2thaHlhb2dsdW5ldDpkZWZhdWx0Iiwic2NvcGUiOlsic3F1aWRleC1hcGkiXX0.ZiIYEfqTvQveNRFRDPO0LchFDiAZc5qP3yxl8DXkZL6CoxXqJMH_BF8p9xKHeNgGPdFJJyM5zkNtQOzhkA5eQA37hB9IIc53y8Fs-q4bDlrO_8IhdZN9vCetXCCpC-Jt_8wLEGgB9XGpCYdNJ-AffuUJK6A25EpatqLUgCZT-ltwzHxMTC0hmn2FPG-SDVCfKFq1Sfls-3TjwkR3Iowvq8BgYJeZvxUN9GmHu5TLfv9jX6b1Ht6SDIUCP_u8K3vOAcgwWcvDqOBbEr0FG_kjlYX1vesaqa_rLGrBmCur1Xy-FKNmIDYwamsyd_ndrURjf0qBD65RSyCm8Er2ixtEog");
      return Promise.resolve(options);
    }
    let options_: any = {
      body: "grant_type=client_credentials&client_id=okahyaoglunet:default&client_secret=tva1bGUnMNAerWEzCbrVDCpjXin0QSOmcxC6Xix6gc8=&scope=squidex-api",
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/x-www-form-urlencoded",
      })
    };
    return (this._http.request("post", "https://cms.okahyaoglu.net/identity-server/connect/token", options_)
      .subscribe(e => {
        debugger;
        //options.headers = options.headers.append("Authorization", "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjkxRkRENEVCRDYwNjMxNURFREI4MENEMDkzMERFRkZBMjFEREE2NkIiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJrZjNVNjlZR01WM3R1QXpRa3czdi1pSGRwbXMifQ.eyJuYmYiOjE1Njc0MzYwMjcsImV4cCI6MTU3MDAyODAyNywiaXNzIjoiaHR0cDovL2Ntcy5va2FoeWFvZ2x1Lm5ldC9pZGVudGl0eS1zZXJ2ZXIiLCJhdWQiOlsiaHR0cDovL2Ntcy5va2FoeWFvZ2x1Lm5ldC9pZGVudGl0eS1zZXJ2ZXIvcmVzb3VyY2VzIiwic3F1aWRleC1hcGkiXSwiY2xpZW50X2lkIjoib2thaHlhb2dsdW5ldDpkZWZhdWx0Iiwic2NvcGUiOlsic3F1aWRleC1hcGkiXX0.ZiIYEfqTvQveNRFRDPO0LchFDiAZc5qP3yxl8DXkZL6CoxXqJMH_BF8p9xKHeNgGPdFJJyM5zkNtQOzhkA5eQA37hB9IIc53y8Fs-q4bDlrO_8IhdZN9vCetXCCpC-Jt_8wLEGgB9XGpCYdNJ-AffuUJK6A25EpatqLUgCZT-ltwzHxMTC0hmn2FPG-SDVCfKFq1Sfls-3TjwkR3Iowvq8BgYJeZvxUN9GmHu5TLfv9jX6b1Ht6SDIUCP_u8K3vOAcgwWcvDqOBbEr0FG_kjlYX1vesaqa_rLGrBmCur1Xy-FKNmIDYwamsyd_ndrURjf0qBD65RSyCm8Er2ixtEog");
        return Promise.resolve(options);
      }));
  }
}
