import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { CasesComponent } from './cases/cases.component';
import { ChillerRoutingModule } from './chiller-routing.module';
import { ChillerComponent } from './chiller.component';
import { CodesComponent } from './codes/codes.component';
import { EemsComponent } from './eems/eems.component';
import { OperationComponent } from './operation/operation.component';
import { ProcureComponent } from './procure/procure.component';
import { ToolsComponent } from './tools/tools.component';


@NgModule({
  declarations: [
    CasesComponent,
    ChillerComponent,
    CodesComponent,
    EemsComponent,
    OperationComponent,
    ProcureComponent,
    ToolsComponent
  ],
  imports: [
    ChillerRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class ChillerModule {
}
