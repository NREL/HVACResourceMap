import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  templateUrl: './terminal.component.html'
})
export class TerminalComponent {
  readonly title = 'Terminal Units';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
    sharedService.setActiveSelectors('terminal1');
  }

}
