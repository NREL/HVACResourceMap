import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OperationComponent } from './operation/operation.component';
import { SensorsControlsRoutingModule } from './sensors-controls-routing.module';
import { SensorsControlsComponent } from './sensors-controls.component';


@NgModule({
  declarations: [
    OperationComponent,
    SensorsControlsComponent
  ],
  imports: [
    CommonModule,
    SensorsControlsRoutingModule
  ]
})
export class SensorsControlsModule {
}
