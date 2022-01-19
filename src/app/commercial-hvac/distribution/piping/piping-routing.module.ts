import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodesComponent } from './codes/codes.component';
import { EemsComponent } from './eems/eems.component';
import { OperationComponent } from './operation/operation.component';
import { PipingComponent } from './piping.component';
import { ProcureComponent } from './procure/procure.component';
import { ToolsComponent } from './tools/tools.component';

const routes: Routes = [{
  path: '',
  component: PipingComponent
}, {
  path: 'codes',
  component: CodesComponent
}, {
  path: 'eems',
  component: EemsComponent
}, {
  path: 'tools',
  component: ToolsComponent
}, {
  path: 'operation',
  component: OperationComponent
}, {
  path: 'procure',
  component: ProcureComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipingRoutingModule {
}
