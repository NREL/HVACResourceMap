import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  templateUrl: './space-loads.component.html'
})
export class SpaceLoadsComponent {
  readonly title = 'Space Loads';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
  }

}
