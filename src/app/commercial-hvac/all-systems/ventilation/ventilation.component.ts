import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  templateUrl: './ventilation.component.html'
})
export class VentilationComponent {
  readonly title = 'Ventilation';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
    sharedService.setActiveSelectors('cp-outline');
  }

}
