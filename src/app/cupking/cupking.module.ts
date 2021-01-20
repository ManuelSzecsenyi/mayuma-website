import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CupkingRoutingModule } from './cupking-routing.module';
import { PrivacyComponent } from './privacy/privacy.component';
import { CupkingComponent } from './cupking/cupking.component';


@NgModule({
  declarations: [PrivacyComponent, CupkingComponent],
  imports: [
    CommonModule,
    CupkingRoutingModule
  ]
})
export class CupkingModule { }
