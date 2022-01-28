import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  selector: 'app-computational-fluid-dynamics',
  templateUrl: './computational-fluid-dynamics.component.html'
})
export class ComputationalFluidDynamicsComponent {
  readonly title = 'Laboratory Ventilation Effectiveness: Computational Fluid Dynamics (CFD)';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
  }

}
