import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '@components/footer/footer.component';
import { HeaderComponent } from '@components/header/header.component';
import { NavComponent } from '@components/nav/nav.component';
import { ExternalLinkDirective } from '@directives/external-link.directive';


@NgModule({
  declarations: [
    ExternalLinkDirective,
    FooterComponent,
    HeaderComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ExternalLinkDirective,
    FooterComponent,
    HeaderComponent,
    NavComponent
  ]
})
export class SharedModule {
}
