import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperationComponent } from './operation/operation.component';
import { SensorsControlsComponent } from './sensors-controls.component';

const routes: Routes = [{
  path: '',
  component: SensorsControlsComponent
}, {
  path: 'operation',
  component: OperationComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SensorsControlsRoutingModule {
}
