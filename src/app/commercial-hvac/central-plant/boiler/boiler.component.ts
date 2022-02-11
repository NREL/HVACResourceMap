import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  templateUrl: './boiler.component.html'
})
export class BoilerComponent {
  readonly title = 'Boiler: General Information';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
    sharedService.setActiveSelectors('boiler');
  }

}
