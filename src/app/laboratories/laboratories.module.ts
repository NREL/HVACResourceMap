import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LowPressureDropDesignComponent } from './distribution/low-pressure-drop-design/low-pressure-drop-design.component';
import { EnergyRecoveryComponent } from './lab-exhaust-devices/energy-recovery/energy-recovery.component';
import { OptimizedExhaustStackDesignComponent } from './lab-exhaust-devices/optimized-exhaust-stack-design/optimized-exhaust-stack-design.component';
import { BuildingEnergyModelingComponent } from './lab-space/building-energy-modeling/building-energy-modeling.component';
import { DemandControlVentilationComponent } from './lab-space/demand-control-ventilation/demand-control-ventilation.component';
import { EnergyBenchmarkingForLabsComponent } from './lab-space/energy-benchmarking-for-labs/energy-benchmarking-for-labs.component';
import { OccupancySensorsComponent } from './lab-space/occupancy-sensors/occupancy-sensors.component';
import { LaboratoriesHomeComponent } from './laboratories-home/laboratories-home.component';
import { LaboratoriesRoutingModule } from './laboratories-routing.module';
import { LaboratoriesComponent } from './laboratories.component';
import { AlternateHVACComponent } from './distribution/ahu/alternate-hvac/alternate-hvac.component';
import { EemsComponent } from './distribution/ahu/eems/eems.component';
import { OperationComponent } from './distribution/ahu/operation/operation.component';
import { DuctingComponent } from './distribution/ducting/ducting.component';
import { VavSystemsComponent } from './distribution/vav-systems/vav-systems.component';
import { VavComponent } from './distribution/vav/vav.component';
import { DiffuserComponent } from './distribution/diffuser/diffuser.component';
import { LabDiagramComponent } from '../diagrams/lab-diagram/lab-diagram.component';

@NgModule({
  declarations: [
    BuildingEnergyModelingComponent,
    DemandControlVentilationComponent,
    EnergyBenchmarkingForLabsComponent,
    EnergyRecoveryComponent,
    LaboratoriesComponent,
    LaboratoriesHomeComponent,
    LowPressureDropDesignComponent,
    OccupancySensorsComponent,
    OptimizedExhaustStackDesignComponent,
    AlternateHVACComponent,
    EemsComponent,
    OperationComponent,
    DuctingComponent,
    VavSystemsComponent,
    VavComponent,
    DiffuserComponent,
    LabDiagramComponent
  ],
  imports: [
    CommonModule,
    LaboratoriesRoutingModule,
    SharedModule
  ]
})
export class LaboratoriesModule {
}
