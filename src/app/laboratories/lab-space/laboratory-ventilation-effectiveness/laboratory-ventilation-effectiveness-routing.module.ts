import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComputationalFluidDynamicsComponent } from './computational-fluid-dynamics/computational-fluid-dynamics.component';
import { LaboratoryVentilationEffectivenessComponent } from './laboratory-ventilation-effectiveness.component';

const routes: Routes = [{
  path: '',
  component: LaboratoryVentilationEffectivenessComponent
}, {
  path: 'computational-fluid-dynamics',
  component: ComputationalFluidDynamicsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaboratoryVentilationEffectivenessRoutingModule {
}
