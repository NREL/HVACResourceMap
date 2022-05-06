import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  templateUrl: './commercial-hvac-home.component.html'
})
export class CommercialHVACHomeComponent {
  readonly title = 'Commercial HVAC';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
    sharedService.setActiveSelectors();
  }

}
