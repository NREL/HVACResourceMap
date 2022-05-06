import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  templateUrl: './chiller.component.html'
})
export class ChillerComponent {
  readonly title = 'Chiller: General Description and Uses';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
    sharedService.setActiveSelectors('chiller');
  }

}
