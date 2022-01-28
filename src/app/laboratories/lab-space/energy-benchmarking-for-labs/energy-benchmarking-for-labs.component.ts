import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  templateUrl: './energy-benchmarking-for-labs.component.html'
})
export class EnergyBenchmarkingForLabsComponent {
  readonly title = 'Energy Benchmarking for Labs';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
  }

}
