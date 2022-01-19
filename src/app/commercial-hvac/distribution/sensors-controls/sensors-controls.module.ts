import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OperationComponent } from './operation/operation.component';

import { SensorsControlsRoutingModule } from './sensors-controls-routing.module';


@NgModule({
  declarations: [
    OperationComponent
  ],
  imports: [
    CommonModule,
    SensorsControlsRoutingModule
  ]
})
export class SensorsControlsModule {
}
