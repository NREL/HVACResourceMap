import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  @Input() showTopNav? = false;
  @Input() showAlternate? = false;

  constructor() {
  }

}
