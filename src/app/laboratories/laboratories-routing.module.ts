import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaboratoriesComponent } from './laboratories.component';

const routes: Routes = [{path: '', component: LaboratoriesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaboratoriesRoutingModule {
}
