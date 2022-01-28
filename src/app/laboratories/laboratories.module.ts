import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { EnergyRecoveryComponent } from './lab-exhaust-devices/energy-recovery/energy-recovery.component';
import { LaboratoriesHomeComponent } from './laboratories-home/laboratories-home.component';
import { LaboratoriesRoutingModule } from './laboratories-routing.module';
import { LaboratoriesComponent } from './laboratories.component';
import { OptimizedExhaustStackDesignComponent } from './lab-exhaust-devices/optimized-exhaust-stack-design/optimized-exhaust-stack-design.component';
import { DemandControlVentilationComponent } from './lab-space/demand-control-ventilation/demand-control-ventilation.component';
import { OccupancySensorsComponent } from './lab-space/occupancy-sensors/occupancy-sensors.component';
import { BuildingEnergyModelingComponent } from './lab-space/building-energy-modeling/building-energy-modeling.component';
import { EnergyBenchmarkingForLabsComponent } from './lab-space/energy-benchmarking-for-labs/energy-benchmarking-for-labs.component';


@NgModule({
  declarations: [
    BuildingEnergyModelingComponent,
    DemandControlVentilationComponent,
    EnergyBenchmarkingForLabsComponent,
    EnergyRecoveryComponent,
    LaboratoriesComponent,
    LaboratoriesHomeComponent,
    OccupancySensorsComponent,
    OptimizedExhaustStackDesignComponent
  ],
  imports: [
    CommonModule,
    LaboratoriesRoutingModule,
    SharedModule
  ]
})
export class LaboratoriesModule {
}
