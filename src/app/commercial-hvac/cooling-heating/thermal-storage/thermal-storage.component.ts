import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  templateUrl: './thermal-storage.component.html'
})
export class ThermalStorageComponent {
  readonly title = 'Thermal Energy Storage';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
    sharedService.setActiveSelectors('cp-outline');
  }

}
