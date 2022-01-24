import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  selector: 'app-central-plant',
  templateUrl: './central-plant.component.html'
})
export class CentralPlantComponent {
  readonly title = 'Central Plant';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
  }

}
