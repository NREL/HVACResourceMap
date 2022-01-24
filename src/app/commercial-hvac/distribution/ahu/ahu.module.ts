import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

import { AhuRoutingModule } from './ahu-routing.module';
import { AhuComponent } from './ahu.component';
import { CasesComponent } from './cases/cases.component';
import { CodesComponent } from './codes/codes.component';
import { EemsComponent } from './eems/eems.component';
import { OperationComponent } from './operation/operation.component';
import { ProcureComponent } from './procure/procure.component';
import { TypesComponent } from './types/types.component';


@NgModule({
  declarations: [
    AhuComponent,
    TypesComponent,
    CodesComponent,
    EemsComponent,
    OperationComponent,
    ProcureComponent,
    CasesComponent
  ],
  imports: [
    AhuRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class AhuModule {
}
