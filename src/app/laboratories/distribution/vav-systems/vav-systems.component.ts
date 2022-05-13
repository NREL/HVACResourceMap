import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  templateUrl: './vav-systems.component.html'
})
export class VavSystemsComponent {
  readonly title = 'Variable Air Volume Systems';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
    sharedService.setActiveSelectors('vav_systems-outline');
  }

}
