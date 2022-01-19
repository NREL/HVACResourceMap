import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasesComponent } from './cases/cases.component';
import { OperationComponent } from './operation/operation.component';
import { SteamTrapsComponent } from './steam-traps.component';
import { ToolsComponent } from './tools/tools.component';

const routes: Routes = [{
  path: '',
  component: SteamTrapsComponent
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
export class SteamTrapsRoutingModule {
}
