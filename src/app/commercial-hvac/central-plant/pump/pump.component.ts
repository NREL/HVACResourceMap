import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  templateUrl: './pump.component.html'
})
export class PumpComponent {
  readonly title = 'Pump: Basics';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
  }

}
