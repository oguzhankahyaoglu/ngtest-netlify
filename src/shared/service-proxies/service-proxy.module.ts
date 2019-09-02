import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {NgModule} from '@angular/core';
import * as ApiServiceProxies from './service-proxies';

@NgModule({
    providers: [
        ApiServiceProxies.ServiceProxy,        
        //{//provide: HTTP_INTERCEPTORS, useClass: AbpHttpInterceptor, multi: true}
    ]
})
export class ServiceProxyModule {
}
