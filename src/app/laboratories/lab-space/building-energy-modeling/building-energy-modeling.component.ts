import { Component, OnInit } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  selector: 'app-building-energy-modeling',
  templateUrl: './building-energy-modeling.component.html'
})
export class BuildingEnergyModelingComponent {
  readonly title = 'Building Energy Modeling';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
  }

}
