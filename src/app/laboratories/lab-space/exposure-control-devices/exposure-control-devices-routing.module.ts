import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EemsComponent } from './eems/eems.component';
import { ExposureControlDevicesComponent } from './exposure-control-devices.component';
import { OperationComponent } from './operation/operation.component';
import { ToolsComponent } from './tools/tools.component';

const routes: Routes = [{
  path: '',
  component: ExposureControlDevicesComponent
}, {
  path: 'eems',
  component: EemsComponent
}, {
  path: 'tools',
  component: ToolsComponent
}, {
  path: 'operation',
  component: OperationComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExposureControlDevicesRoutingModule {
}
