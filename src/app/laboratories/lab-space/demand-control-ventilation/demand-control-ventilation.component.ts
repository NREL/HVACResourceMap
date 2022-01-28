import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  templateUrl: './demand-control-ventilation.component.html'
})
export class DemandControlVentilationComponent {
  readonly title = 'Demand Control Ventilation';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
  }

}
