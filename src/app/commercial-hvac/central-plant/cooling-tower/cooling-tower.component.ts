import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  templateUrl: './cooling-tower.component.html'
})
export class CoolingTowerComponent {
  readonly title = 'Cooling Tower: General Description and Uses';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
  }

}
