import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  templateUrl: './evaporative.component.html'
})
export class EvaporativeComponent {
  readonly title = 'Evaporative';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
    sharedService.setActiveSelectors('cp-outline');
  }

}
