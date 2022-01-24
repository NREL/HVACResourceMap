import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasesComponent } from './cases/cases.component';
import { CodesComponent } from './codes/codes.component';
import { CoolingTowerComponent } from './cooling-tower.component';
import { EemsComponent } from './eems/eems.component';
import { OperationComponent } from './operation/operation.component';
import { ProcureComponent } from './procure/procure.component';
import { ToolsComponent } from './tools/tools.component';
import { TypesComponent } from './types/types.component';

const routes: Routes = [{
  path: '',
  component: CoolingTowerComponent
}, {
  path: 'types',
  component: TypesComponent
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
}, {
  path: 'cases',
  component: CasesComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoolingTowerRoutingModule {
}
