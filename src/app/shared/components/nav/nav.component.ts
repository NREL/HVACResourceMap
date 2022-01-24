import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent {
  @Input() showTopNav = true;
  @Input() showAlternate = false;
}
