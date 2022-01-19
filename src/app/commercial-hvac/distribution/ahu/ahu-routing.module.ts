import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhuComponent } from './ahu.component';
import { CasesComponent } from './cases/cases.component';
import { CodesComponent } from './codes/codes.component';
import { EemsComponent } from './eems/eems.component';
import { OperationComponent } from './operation/operation.component';
import { ProcureComponent } from './procure/procure.component';
import { TypesComponent } from './types/types.component';

const routes: Routes = [{
  path: '',
  component: AhuComponent
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
export class AhuRoutingModule {
}
