import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { CasesComponent } from './cases/cases.component';
import { CodesComponent } from './codes/codes.component';
import { EemsComponent } from './eems/eems.component';
import { OperationComponent } from './operation/operation.component';
import { ProcureComponent } from './procure/procure.component';
import { PumpRoutingModule } from './pump-routing.module';
import { PumpComponent } from './pump.component';
import { ToolsComponent } from './tools/tools.component';


@NgModule({
  declarations: [
    CasesComponent,
    CodesComponent,
    EemsComponent,
    OperationComponent,
    ProcureComponent,
    PumpComponent,
    ToolsComponent
  ],
  imports: [
    CommonModule,
    PumpRoutingModule,
    SharedModule
  ]
})
export class PumpModule {
}
