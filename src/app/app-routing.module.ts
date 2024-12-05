import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AirWaterDistributionComponent } from './commercial-hvac/all-systems/air-water-distribution/air-water-distribution.component';
import { AllSystemsComponent } from './commercial-hvac/all-systems/all-systems.component';
import { CentralPlantComponent } from './commercial-hvac/central-plant/central-plant.component';
import { CoolingComponent } from './commercial-hvac/cooling/cooling.component';
import { CoolingHeatingComponent } from './commercial-hvac/cooling-heating/cooling-heating.component';
import { CoolThermalEnergyStorageComponent } from './commercial-hvac/central-plant/cool-thermal-energy-storage/cool-thermal-energy-storage.component';
import { EvaporativeComponent } from './commercial-hvac/cooling/evaporative/evaporative.component';
import { FurnaceComponent } from './commercial-hvac/heating/furnace/furnace.component';
import { HeatingComponent } from './commercial-hvac/heating/heating.component';
import { HeatPumpComponent } from './commercial-hvac/cooling-heating/heat-pump/heat-pump.component';
import { HotThermalEnergyStorageComponent } from './commercial-hvac/central-plant/hot-thermal-energy-storage/hot-thermal-energy-storage.component';
import { HotWaterComponent } from './commercial-hvac/heating/hot-water/hot-water.component';
import { CommercialHVACHomeComponent } from './commercial-hvac/commercial-hvac-home/commercial-hvac-home.component';
import { CommercialHVACComponent } from './commercial-hvac/commercial-hvac.component';
import { DiffusersComponent } from './commercial-hvac/distribution/diffusers/diffusers.component';
import { DistributionComponent } from './commercial-hvac/distribution/distribution.component';
import { DuctingComponent } from './commercial-hvac/distribution/ducting/ducting.component';
import { MaintenanceCommissioningComponent } from './commercial-hvac/all-systems/maintenance-commissioning/maintenance-commissioning.component';
import { PackagedSystemComponent } from './commercial-hvac/cooling-heating/packaged-system/packaged-system.component';
import { PointSourceComponent } from './commercial-hvac/heating/point-source/point-source.component';
import { RefrigerantsComponent } from './commercial-hvac/all-systems/refrigerants/refrigerants.component';
import { RefrigerationComponent } from './commercial-hvac/cooling/refrigeration/refrigeration.component';
import { SensorsControlsComponent } from './commercial-hvac/all-systems/sensors-controls/sensors-controls.component';
import { SplitSystemComponent } from './commercial-hvac/cooling-heating/split-system/split-system.component';
import { TerminalComponent } from './commercial-hvac/distribution/terminal/terminal.component';
import { ThermalStorageComponent } from './commercial-hvac/cooling-heating/thermal-storage/thermal-storage.component';
import { VavComponent } from './commercial-hvac/distribution/vav/vav.component';
import { VentilationComponent } from './commercial-hvac/all-systems/ventilation/ventilation.component';
import { ContactComponent } from './contact/contact.component';
import { ContributorsComponent } from './contributors/contributors.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'commercial-hvac',
  component: CommercialHVACComponent,
  children: [{
    path: '',
    component: CommercialHVACHomeComponent
  }, {
    path: 'all-systems',
    component: AllSystemsComponent
  }, {
    path: 'all-systems/sensors-controls',
    component: SensorsControlsComponent
  }, {
    path: 'all-systems/air-water-distribution',
    component: AirWaterDistributionComponent
  }, {
    path: 'all-systems/ventilation',
    component: VentilationComponent
  }, {
    path: 'all-systems/maintenance-commissioning',
    component: MaintenanceCommissioningComponent
  }, {
    path: 'all-systems/refrigerants',
    component: RefrigerantsComponent
  }, {
    path: 'cooling',
    component: CoolingComponent
  }, {
    path: 'cooling/chiller',
    loadChildren: () => import(/* webpackChunkName: "cooling-chiller" */ './commercial-hvac/central-plant/chiller/chiller.module').then(m => m.ChillerModule)
  }, {
    path: 'cooling/cooling-tower',
    loadChildren: () => import(/* webpackChunkName: "cooling-cooling-tower" */ './commercial-hvac/central-plant/cooling-tower/cooling-tower.module').then(m => m.CoolingTowerModule)
  }, {
    path: 'cooling/evaporative',
    component: EvaporativeComponent
  }, {
    path: 'cooling/refrigeration',
    component: RefrigerationComponent
  }, {
    path: 'cooling-heating',
    component: CoolingHeatingComponent
  }, {
    path: 'cooling-heating/heat-pump',
    component: HeatPumpComponent
  }, {
    path: 'cooling-heating/packaged-system',
    component: PackagedSystemComponent
  }, {
    path: 'cooling-heating/split-system',
    component: SplitSystemComponent
  }, {
    path: 'cooling-heating/thermal-storage',
    component: ThermalStorageComponent
  }, {
    path: 'heating',
    component: HeatingComponent
  }, {
    path: 'heating/furnace',
    component: FurnaceComponent
  }, {
    path: 'heating/boiler',
    loadChildren: () => import(/* webpackChunkName: "heating-boiler" */ './commercial-hvac/central-plant/boiler/boiler.module').then(m => m.BoilerModule)
  }, {
    path: 'heating/point-source',
    component: PointSourceComponent
  }, {
    path: 'heating/hot-water',
    component: HotWaterComponent
  }, {
    path: 'central-plant',
    component: CentralPlantComponent
  }, {
    path: 'central-plant/boiler',
    loadChildren: () => import(/* webpackChunkName: "central-plant-boiler" */ './commercial-hvac/central-plant/boiler/boiler.module').then(m => m.BoilerModule)
  }, {
    path: 'central-plant/cool-thermal-energy-storage',
    component: CoolThermalEnergyStorageComponent
  }, {
    path: 'central-plant/hot-thermal-energy-storage',
    component: HotThermalEnergyStorageComponent
  }, {
    path: 'central-plant/pump',
    loadChildren: () => import(/* webpackChunkName: "central-plant-pump" */ './commercial-hvac/central-plant/pump/pump.module').then(m => m.PumpModule)
  }, {
    path: 'central-plant/sensors-controls',
    loadChildren: () => import(/* webpackChunkName: "sensors-controls" */ './commercial-hvac/shared/sensors-controls/sensors-controls.module').then(m => m.SensorsControlsModule)
  }, {
    path: 'distribution',
    component: DistributionComponent
  }, {
    path: 'distribution/ahu',
    loadChildren: () => import(/* webpackChunkName: "distribution-ahu" */ './commercial-hvac/distribution/ahu/ahu.module').then(m => m.AhuModule)
  }, {
    path: 'distribution/ducting',
    component: DuctingComponent
  }, {
    path: 'distribution/diffusers',
    component: DiffusersComponent
  }, {
    path: 'distribution/fans',
    loadChildren: () => import(/* webpackChunkName: "distribution-fans" */ './commercial-hvac/distribution/fans/fans.module').then(m => m.FansModule)
  }, {
    path: 'distribution/piping',
    loadChildren: () => import(/* webpackChunkName: "distribution-piping" */ './commercial-hvac/distribution/piping/piping.module').then(m => m.PipingModule)
  }, {
    path: 'distribution/steam-traps',
    loadChildren: () => import(/* webpackChunkName: "distribution-steam-traps" */ './commercial-hvac/distribution/steam-traps/steam-traps.module').then(m => m.SteamTrapsModule)
  }, {
    path: 'distribution/terminal-units',
    component: TerminalComponent
  }, {
    path: 'distribution/valve',
    loadChildren: () => import(/* webpackChunkName: "distribution-valve" */ './commercial-hvac/distribution/valve/valve.module').then(m => m.ValveModule)
  }, {
    path: 'distribution/vav',
    component: VavComponent
  }, {
    path: 'distribution/sensors-controls',
    loadChildren: () => import(/* webpackChunkName: "sensors-controls" */ './commercial-hvac/shared/sensors-controls/sensors-controls.module').then(m => m.SensorsControlsModule)
  }]
}, {
  path: 'laboratories',
  loadChildren: () => import(/* webpackChunkName: "laboratories" */ './laboratories/laboratories.module').then(m => m.LaboratoriesModule)
}, {
  path: 'contributors',
  component: ContributorsComponent
}, {
  path: 'contact',
  component: ContactComponent
}, {
  path: '**',
  redirectTo: ''
}];

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
  scrollPositionRestoration: 'enabled'
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
