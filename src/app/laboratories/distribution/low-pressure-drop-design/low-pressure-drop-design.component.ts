import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  templateUrl: './low-pressure-drop-design.component.html'
})
export class LowPressureDropDesignComponent {
  readonly title = 'Low Pressure Drop Design';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
  }

}
