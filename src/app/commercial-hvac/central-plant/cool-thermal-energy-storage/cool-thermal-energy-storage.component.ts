import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  selector: 'app-cool-thermal-energy-storage',
  templateUrl: './cool-thermal-energy-storage.component.html'
})
export class CoolThermalEnergyStorageComponent {
  readonly title = 'Cool Thermal Energy Storage: Basics';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
  }

}
