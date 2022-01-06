import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PrimaryTemplateComponent } from './primary-template/primary-template.component';
import { SecondaryTemplateComponent } from './secondary-template/secondary-template.component';
import { WithoutTopnavComponent } from './without-topnav/without-topnav.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'primary-template',
  component: PrimaryTemplateComponent
}, {
  path: 'secondary-template',
  component: SecondaryTemplateComponent
}, {
  path: 'without-topnav',
  component: WithoutTopnavComponent
}, {
  path: '**',
  redirectTo: ''
}];

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
  scrollPositionRestoration: 'enabled'
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
