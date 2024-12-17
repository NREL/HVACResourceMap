import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoilerComponent } from './../commercial-hvac/central-plant/boiler/boiler.component';
import { ChillerComponent } from './../commercial-hvac/central-plant/chiller/chiller.component';
import { CoolingTowerComponent } from './../commercial-hvac/central-plant/cooling-tower/cooling-tower.component';
import { CoolThermalEnergyStorageComponent } from '../commercial-hvac/central-plant/cool-thermal-energy-storage/cool-thermal-energy-storage.component';
import { HotThermalEnergyStorageComponent } from '../commercial-hvac/central-plant/hot-thermal-energy-storage/hot-thermal-energy-storage.component';
import { PipingComponent } from '../commercial-hvac/distribution/piping/piping.component';
import { AhuComponent } from '../commercial-hvac/distribution/ahu/ahu.component';
import { CodesComponent } from '../commercial-hvac/distribution/ahu/codes/codes.component';
import { FansComponent } from '../commercial-hvac/distribution/fans/fans.component';
import { SteamTrapsComponent } from '../commercial-hvac/distribution/steam-traps/steam-traps.component';
import { AlternateHVACComponent } from './distribution/ahu/alternate-hvac/alternate-hvac.component';
import { EemsComponent } from './distribution/ahu/eems/eems.component';
import { OperationComponent } from './distribution/ahu/operation/operation.component';
import { DiffuserComponent } from './distribution/diffuser/diffuser.component';
import { DuctingComponent } from './distribution/ducting/ducting.component';
import { LowPressureDropDesignComponent } from './distribution/low-pressure-drop-design/low-pressure-drop-design.component';
import { ValveComponent } from '../commercial-hvac/distribution/valve/valve.component';
import { VavSystemsComponent } from './distribution/vav-systems/vav-systems.component';
import { VavComponent } from './distribution/vav/vav.component';
import { EnergyRecoveryComponent } from './lab-exhaust-devices/energy-recovery/energy-recovery.component';
import { OptimizedExhaustStackDesignComponent } from './lab-exhaust-devices/optimized-exhaust-stack-design/optimized-exhaust-stack-design.component';
import { BuildingEnergyModelingComponent } from './lab-space/building-energy-modeling/building-energy-modeling.component';
import { DemandControlVentilationComponent } from './lab-space/demand-control-ventilation/demand-control-ventilation.component';
import { EnergyBenchmarkingForLabsComponent } from './lab-space/energy-benchmarking-for-labs/energy-benchmarking-for-labs.component';
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
    path: 'distribution/low-pressure-drop-design',
    component: LowPressureDropDesignComponent
  }, {
    path: 'distribution/ahu',
    component: AhuComponent
  }, {
    path: 'distribution/ahu/alternate-hvac',
    component: AlternateHVACComponent
  }, {
    path: 'distribution/ahu/codes',
    component: CodesComponent
  }, {
    path: 'distribution/ahu/eems',
    component: EemsComponent
  }, {
    path: 'distribution/ahu/operation',
    component: OperationComponent
  }, {
    path: 'distribution/fans',
    component: FansComponent
  }, {
    path: 'distribution/ducting',
    component: DuctingComponent
  }, {
    path: 'distribution/vav-systems',
    component: VavSystemsComponent
  }, {
    path: 'distribution/vav',
    component: VavComponent
  }, {
    path: 'distribution/diffuser',
    component: DiffuserComponent
  }, {
    path: 'distribution/piping',
    component: PipingComponent
  }, {
    path: 'distribution/steam-traps',
    component: SteamTrapsComponent
  }, {
    path: 'distribution/steam-traps/tools',
    component: SteamTrapsComponent
  }, {
    path: 'distribution/valve',
    component: ValveComponent
  }, {
    path: 'lab-exhaust-devices',
    component: LaboratoriesHomeComponent
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
    component: BoilerComponent
  }, {
    path: 'central-plant/chiller',
    component: ChillerComponent
  }, {
    path: 'central-plant/cooling-tower',
    component: CoolingTowerComponent
  }, {
    path: 'central-plant/cool-thermal-energy-storage',
    component: CoolThermalEnergyStorageComponent
  }, {
    path: 'central-plant/hot-thermal-energy-storage',
    component: HotThermalEnergyStorageComponent
  }, {
    path: 'central-plant/pump',
    loadChildren: () => import(/* webpackChunkName: "central-plant-pump" */ '../commercial-hvac/central-plant/pump/pump.module').then(m => m.PumpModule)
  }, {
    path: 'central-plant/sensors-controls',
    loadChildren: () => import(/* webpackChunkName: "sensors-controls" */ '../commercial-hvac/shared/sensors-controls/sensors-controls.module').then(m => m.SensorsControlsModule)
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaboratoriesRoutingModule {
}
