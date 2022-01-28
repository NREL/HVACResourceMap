import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnergyRecoveryComponent } from './lab-exhaust-devices/energy-recovery/energy-recovery.component';
import { OptimizedExhaustStackDesignComponent } from './lab-exhaust-devices/optimized-exhaust-stack-design/optimized-exhaust-stack-design.component';
import { BuildingEnergyModelingComponent } from './lab-space/building-energy-modeling/building-energy-modeling.component';
import { DemandControlVentilationComponent } from './lab-space/demand-control-ventilation/demand-control-ventilation.component';
import { EnergyBenchmarkingForLabsComponent } from './lab-space/energy-benchmarking-for-labs/energy-benchmarking-for-labs.component';
import { ComputationalFluidDynamicsComponent } from './lab-space/laboratory-ventilation-effectiveness/computational-fluid-dynamics/computational-fluid-dynamics.component';
import { OccupancySensorsComponent } from './lab-space/occupancy-sensors/occupancy-sensors.component';
import { LaboratoriesHomeComponent } from './laboratories-home/laboratories-home.component';
import { LaboratoriesComponent } from './laboratories.component';

const routes: Routes = [{
  path: '',
  component: LaboratoriesComponent,
  children: [{
    path: '',
    component: LaboratoriesHomeComponent
  }, {
    path: 'lab-space',
    component: LaboratoriesHomeComponent
  }, {
    path: 'lab-space/laboratory-ventilation-effectiveness',
    loadChildren: () => import(/* webpackChunkName: "laboratory-ventilation-effectiveness" */ './lab-space/laboratory-ventilation-effectiveness/laboratory-ventilation-effectiveness.module').then(m => m.LaboratoryVentilationEffectivenessModule)
  }, {
    path: 'lab-space/demand-control-ventilation',
    component: DemandControlVentilationComponent
  }, {
    path: 'lab-space/occupancy-sensors',
    component: OccupancySensorsComponent
  }, {
    path: 'lab-space/exposure-control-devices',
    loadChildren: () => import(/* webpackChunkName: "exposure-control-devices" */ './lab-space/exposure-control-devices/exposure-control-devices.module').then(m => m.ExposureControlDevicesModule)
  }, {
    path: 'lab-space/building-energy-modeling',
    component: BuildingEnergyModelingComponent
  }, {
    path: 'lab-space/energy-benchmarking-for-labs',
    component: EnergyBenchmarkingForLabsComponent
  }, {
    path: 'distribution',
    component: LaboratoriesHomeComponent
  }, {
    path: 'lab-exhaust-devices',
    component: LaboratoriesHomeComponent,
  }, {
    path: 'lab-exhaust-devices/energy-recovery',
    component: EnergyRecoveryComponent
  }, {
    path: 'lab-exhaust-devices/optimized-exhaust-stack-design',
    component: OptimizedExhaustStackDesignComponent
  }, {
    path: 'central-plant',
    component: LaboratoriesHomeComponent
  }, {
    path: 'central-plant/boiler',
    loadChildren: () => import(/* webpackChunkName: "central-plant-boiler" */ '../commercial-hvac/central-plant/boiler/boiler.module').then(m => m.BoilerModule)
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaboratoriesRoutingModule {
}
