import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { CentralPlantComponent } from './commercial-hvac/central-plant/central-plant.component';
import { CoolThermalEnergyStorageComponent } from './commercial-hvac/central-plant/cool-thermal-energy-storage/cool-thermal-energy-storage.component';
import { HotThermalEnergyStorageComponent } from './commercial-hvac/central-plant/hot-thermal-energy-storage/hot-thermal-energy-storage.component';
import { CommercialHVACHomeComponent } from './commercial-hvac/commercial-hvac-home/commercial-hvac-home.component';
import { CommercialHVACComponent } from './commercial-hvac/commercial-hvac.component';
import { DiffusersComponent } from './commercial-hvac/distribution/diffusers/diffusers.component';
import { DistributionComponent } from './commercial-hvac/distribution/distribution.component';
import { DuctingComponent } from './commercial-hvac/distribution/ducting/ducting.component';
import { TerminalComponent } from './commercial-hvac/distribution/terminal/terminal.component';
import { VavComponent } from './commercial-hvac/distribution/vav/vav.component';
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
    path: 'central-plant',
    component: CentralPlantComponent
  }, {
    path: 'central-plant/boiler',
    loadChildren: () => import(/* webpackChunkName: "central-plant-boiler" */ './commercial-hvac/central-plant/boiler/boiler.module').then(m => m.BoilerModule)
  }, {
    path: 'central-plant/chiller',
    loadChildren: () => import(/* webpackChunkName: "central-plant-chiller" */ './commercial-hvac/central-plant/chiller/chiller.module').then(m => m.ChillerModule)
  }, {
    path: 'central-plant/cooling-tower',
    loadChildren: () => import(/* webpackChunkName: "central-plant-cooling-tower" */ './commercial-hvac/central-plant/cooling-tower/cooling-tower.module').then(m => m.CoolingTowerModule)
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
