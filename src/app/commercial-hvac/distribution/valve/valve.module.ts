import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { CasesComponent } from './cases/cases.component';
import { CodesComponent } from './codes/codes.component';
import { EemsComponent } from './eems/eems.component';
import { OperationComponent } from './operation/operation.component';
import { ToolsComponent } from './tools/tools.component';
import { TypesComponent } from './types/types.component';

import { ValveRoutingModule } from './valve-routing.module';
import { ValveComponent } from './valve.component';


@NgModule({
  declarations: [
    CasesComponent,
    CodesComponent,
    EemsComponent,
    OperationComponent,
    ToolsComponent,
    TypesComponent,
    ValveComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ValveRoutingModule
  ]
})
export class ValveModule {
}
