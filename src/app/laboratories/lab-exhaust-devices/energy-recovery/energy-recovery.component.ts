import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  templateUrl: './energy-recovery.component.html'
})
export class EnergyRecoveryComponent {
  readonly title = 'Energy Recovery: General Information';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
  }

}
