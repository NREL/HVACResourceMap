import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { OperationComponent } from './operation/operation.component';

import { SensorsControlsRoutingModule } from './sensors-controls-routing.module';


@NgModule({
  declarations: [
    OperationComponent
  ],
  imports: [
    CommonModule,
    SensorsControlsRoutingModule,
    SharedModule
  ]
})
export class SensorsControlsModule {
}
