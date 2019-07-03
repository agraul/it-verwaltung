import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ApiClientService } from './api-client.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [ApiClientService]
})
export class CoreModule { }
