import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ExposureControlDevicesRoutingModule } from './exposure-control-devices-routing.module';
import { ExposureControlDevicesComponent } from './exposure-control-devices.component';
import { EemsComponent } from './eems/eems.component';
import { ToolsComponent } from './tools/tools.component';
import { OperationComponent } from './operation/operation.component';

@NgModule({
  declarations: [
    ExposureControlDevicesComponent,
    EemsComponent,
    ToolsComponent,
    OperationComponent
  ],
  imports: [
    CommonModule,
    ExposureControlDevicesRoutingModule
  ]
})
export class ExposureControlDevicesModule {
}
