import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AirWaterDistributionComponent } from './commercial-hvac/all-systems/air-water-distribution/air-water-distribution.component';
import { AllSystemsComponent } from './commercial-hvac/all-systems/all-systems.component';
import { CentralPlantComponent } from './commercial-hvac/central-plant/central-plant.component';
import { CoolingComponent } from './commercial-hvac/cooling/cooling.component';
import { CoolingHeatingComponent } from './commercial-hvac/cooling-heating/cooling-heating.component';
import { CoolThermalEnergyStorageComponent } from './commercial-hvac/central-plant/cool-thermal-energy-storage/cool-thermal-energy-storage.component';
import { HeatingComponent } from './commercial-hvac/heating/heating.component';
import { HotThermalEnergyStorageComponent } from './commercial-hvac/central-plant/hot-thermal-energy-storage/hot-thermal-energy-storage.component';
import { CommercialAhuComponent } from './commercial-hvac/all-systems/air-water-distribution/commercial-ahu/commercial-ahu.component';
import { CommercialHVACHomeComponent } from './commercial-hvac/commercial-hvac-home/commercial-hvac-home.component';
import { CommercialHVACComponent } from './commercial-hvac/commercial-hvac.component';
import { DiffusersComponent } from './commercial-hvac/distribution/diffusers/diffusers.component';
import { DistributionComponent } from './commercial-hvac/distribution/distribution.component';
import { DuctingComponent } from './commercial-hvac/distribution/ducting/ducting.component';
import { SteamTrapsComponent } from './commercial-hvac/distribution/steam-traps/steam-traps.component';
import { TerminalComponent } from './commercial-hvac/distribution/terminal/terminal.component';
import { VavComponent } from './commercial-hvac/distribution/vav/vav.component';
import { ContactComponent } from './contact/contact.component';
import { ContributorsComponent } from './contributors/contributors.component';
import { HvacDiagramComponent } from './diagrams/hvac-diagram/hvac-diagram.component';
import { SpaceDiagramComponent } from './diagrams/space-diagram/space-diagram.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    AirWaterDistributionComponent,
    AllSystemsComponent,
    CentralPlantComponent,
    CommercialAhuComponent,
    CommercialHVACComponent,
    CommercialHVACHomeComponent,
    ContactComponent,
    ContributorsComponent,
    CoolingComponent,
    CoolingHeatingComponent,
    CoolThermalEnergyStorageComponent,
    DiffusersComponent,
    DistributionComponent,
    DuctingComponent,
    HeatingComponent,
    HomeComponent,
    HotThermalEnergyStorageComponent,
    HvacDiagramComponent,
    SpaceDiagramComponent,
    SteamTrapsComponent,
    TerminalComponent,
    VavComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    OverlayscrollbarsModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
