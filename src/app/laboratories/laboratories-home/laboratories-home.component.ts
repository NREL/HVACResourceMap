import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  templateUrl: './laboratories-home.component.html'
})
export class LaboratoriesHomeComponent {
  readonly title = 'Lab HVAC';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
  }

}
