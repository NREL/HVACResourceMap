import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { CasesComponent } from './cases/cases.component';
import { OperationComponent } from './operation/operation.component';

import { SteamTrapsRoutingModule } from './steam-traps-routing.module';
import { ToolsComponent } from './tools/tools.component';


@NgModule({
  declarations: [
    CasesComponent,
    OperationComponent,
    ToolsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SteamTrapsRoutingModule
  ]
})
export class SteamTrapsModule {
}
