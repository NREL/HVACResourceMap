import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasesComponent } from './cases/cases.component';
import { CodesComponent } from './codes/codes.component';
import { EemsComponent } from './eems/eems.component';
import { OperationComponent } from './operation/operation.component';
import { ToolsComponent } from './tools/tools.component';
import { TypesComponent } from './types/types.component';
import { ValveComponent } from './valve.component';

const routes: Routes = [{
  path: '',
  component: ValveComponent
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
  path: 'cases',
  component: CasesComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValveRoutingModule {
}
