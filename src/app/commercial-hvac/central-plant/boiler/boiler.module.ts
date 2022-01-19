import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BoilerRoutingModule } from './boiler-routing.module';
import { BoilerComponent } from './boiler.component';
import { CasesComponent } from './cases/cases.component';
import { CodesComponent } from './codes/codes.component';
import { OperationComponent } from './operation/operation.component';
import { ProcureComponent } from './procure/procure.component';
import { ToolsComponent } from './tools/tools.component';
import { EemsComponent } from './eems/eems.component';

@NgModule({
  declarations: [
    BoilerComponent,
    CasesComponent,
    CodesComponent,
    EemsComponent,
    OperationComponent,
    ProcureComponent,
    ToolsComponent
  ],
  imports: [
    BoilerRoutingModule,
    CommonModule
  ]
})
export class BoilerModule {
}
