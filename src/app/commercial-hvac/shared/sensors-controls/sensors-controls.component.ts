import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  templateUrl: './sensors-controls.component.html'
})
export class SensorsControlsComponent {
  readonly title = 'Sensors and Controls: Basics';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
  }

}
