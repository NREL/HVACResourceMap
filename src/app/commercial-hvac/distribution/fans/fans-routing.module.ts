import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasesComponent } from './cases/cases.component';
import { EemsComponent } from './eems/eems.component';
import { FansComponent } from './fans.component';
import { OperationComponent } from './operation/operation.component';
import { ProcureComponent } from './procure/procure.component';
import { ToolsComponent } from './tools/tools.component';
import { TuneComponent } from './tune/tune.component';
import { TypesComponent } from './types/types.component';

const routes: Routes = [{
  path: '',
  component: FansComponent
}, {
  path: 'types',
  component: TypesComponent
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
}, {
  path: 'cases',
  component: CasesComponent
}, {
  path: 'tune',
  component: TuneComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FansRoutingModule {
}
