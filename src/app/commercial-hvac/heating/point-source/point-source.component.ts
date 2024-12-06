import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  templateUrl: './point-source.component.html'
})
export class PointSourceComponent {
  readonly title = 'Point Source';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
    sharedService.setActiveSelectors('cp-outline');
  }

}
