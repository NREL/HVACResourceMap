import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  selector: 'app-cooling-tower',
  templateUrl: './cooling-tower.component.html'
})
export class CoolingTowerComponent {
  readonly title = 'Cooling Tower: General Description and Uses';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
  }

}
