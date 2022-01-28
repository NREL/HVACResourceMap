import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComputationalFluidDynamicsComponent } from './computational-fluid-dynamics/computational-fluid-dynamics.component';
import { LaboratoryVentilationEffectivenessRoutingModule } from './laboratory-ventilation-effectiveness-routing.module';
import { LaboratoryVentilationEffectivenessComponent } from './laboratory-ventilation-effectiveness.component';


@NgModule({
  declarations: [
    ComputationalFluidDynamicsComponent,
    LaboratoryVentilationEffectivenessComponent
  ],
  imports: [
    CommonModule,
    LaboratoryVentilationEffectivenessRoutingModule
  ]
})
export class LaboratoryVentilationEffectivenessModule {
}
