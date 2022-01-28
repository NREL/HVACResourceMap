import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  templateUrl: './alternate-hvac.component.html'
})
export class AlternateHVACComponent {
  readonly title = 'Air Handling Units: Alternative HVAC';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
  }

}
