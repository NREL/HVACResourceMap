import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  templateUrl: './operation.component.html'
})
export class OperationComponent {
  readonly title = 'Air Handling Units: Operation and Training Resources';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
    sharedService.setActiveSelectors('ahu');
  }

}
