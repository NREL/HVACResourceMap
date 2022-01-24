import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  selector: 'app-hot-thermal-energy-storage',
  templateUrl: './hot-thermal-energy-storage.component.html'
})
export class HotThermalEnergyStorageComponent {
  readonly title = 'Hot Thermal Energy Storage: Basics';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
  }

}
