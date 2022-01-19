import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CodesComponent } from './codes/codes.component';
import { EemsComponent } from './eems/eems.component';
import { OperationComponent } from './operation/operation.component';

import { PipingRoutingModule } from './piping-routing.module';
import { PipingComponent } from './piping.component';
import { ProcureComponent } from './procure/procure.component';
import { ToolsComponent } from './tools/tools.component';


@NgModule({
  declarations: [
    PipingComponent,
    CodesComponent,
    EemsComponent,
    ToolsComponent,
    OperationComponent,
    ProcureComponent
  ],
  imports: [
    CommonModule,
    PipingRoutingModule
  ]
})
export class PipingModule {
}
