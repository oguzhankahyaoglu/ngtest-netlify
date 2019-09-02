import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { HttpClientModule } from '@angular/common/http';
// configuring providers
import { ApiModule, Configuration, ConfigurationParameters } from '@angular-schule/okahyaogluapi';

export function apiConfigFactory (): Configuration 
{
  const params: ConfigurationParameters = {
    basePath: "https://cms.okahyaoglu.net/api",
    accessToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjkxRkRENEVCRDYwNjMxNURFREI4MENEMDkzMERFRkZBMjFEREE2NkIiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJrZjNVNjlZR01WM3R1QXpRa3czdi1pSGRwbXMifQ.eyJuYmYiOjE1Njc0MTU4NTUsImV4cCI6MTU3MDAwNzg1NSwiaXNzIjoiaHR0cDovL2Ntcy5va2FoeWFvZ2x1Lm5ldC9pZGVudGl0eS1zZXJ2ZXIiLCJhdWQiOlsiaHR0cDovL2Ntcy5va2FoeWFvZ2x1Lm5ldC9pZGVudGl0eS1zZXJ2ZXIvcmVzb3VyY2VzIiwic3F1aWRleC1hcGkiXSwiY2xpZW50X2lkIjoib2thaHlhb2dsdW5ldDpkZWZhdWx0Iiwic2NvcGUiOlsic3F1aWRleC1hcGkiXX0.U6-eM5mVNcvOwjWKxV8uCesOu5SN6VxijJuxbbqphG5eqpZMV4lQQzZQEvfmf_5fBx3TKbDMYDb-d5pRN53De-LS8xyoYRlrkTeCtwm4EKcIRVRvFAYRCf4yEdaf4gPJuoqpNZBRnfUpRjPdPfXbmW-HGDK5dle3ANFj4qMXETWVKnT2H7WMQLahrva1IvVdzTeNXTQy7_IMdcNi-w2iWfIobyLA3ECqTs2jgcI37rSk7KIpHCf7sIYigeB2TEkvsnGjZM9DYqSUKLIPvANO_gs961FfsijFcrasaGKoEbu8mQ2rFrYqCda90uF4ACi68Cx6HALyPHm0r0m9lnYOKw" 
  }
  return new Configuration(params);
}

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent
  ],
  imports: [
    HttpClientModule,
    ApiModule.forRoot(apiConfigFactory),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
