import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  selector: 'app-laboratory-ventilation-effectiveness',
  templateUrl: './laboratory-ventilation-effectiveness.component.html'
})
export class LaboratoryVentilationEffectivenessComponent {
  readonly title = 'Laboratory Ventilation Effectiveness';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
  }

}
