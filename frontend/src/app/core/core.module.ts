import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ApiClientService } from './api-client.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './http-interceptor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [ApiClientService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }]
})
export class CoreModule { }
