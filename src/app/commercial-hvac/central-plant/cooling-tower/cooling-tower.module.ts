import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CasesComponent } from './cases/cases.component';
import { CodesComponent } from './codes/codes.component';

import { CoolingTowerRoutingModule } from './cooling-tower-routing.module';
import { CoolingTowerComponent } from './cooling-tower.component';
import { EemsComponent } from './eems/eems.component';
import { OperationComponent } from './operation/operation.component';
import { ProcureComponent } from './procure/procure.component';
import { ToolsComponent } from './tools/tools.component';
import { TypesComponent } from './types/types.component';


@NgModule({
  declarations: [
    CasesComponent,
    CodesComponent,
    CoolingTowerComponent,
    EemsComponent,
    OperationComponent,
    ProcureComponent,
    ToolsComponent,
    TypesComponent
  ],
  imports: [
    CommonModule,
    CoolingTowerRoutingModule
  ]
})
export class CoolingTowerModule {
}
