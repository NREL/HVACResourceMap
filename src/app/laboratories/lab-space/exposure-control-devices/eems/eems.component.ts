import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  templateUrl: './eems.component.html'
})
export class EemsComponent {
  readonly title = 'Exposure Control Devices: Energy Efficiency Measures';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
    sharedService.setActiveSelectors('hoodoutline');
  }

}
