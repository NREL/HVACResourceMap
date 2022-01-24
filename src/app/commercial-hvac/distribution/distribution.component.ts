import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  templateUrl: './distribution.component.html'
})
export class DistributionComponent {
  readonly title = 'Distribution System';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
  }

}
