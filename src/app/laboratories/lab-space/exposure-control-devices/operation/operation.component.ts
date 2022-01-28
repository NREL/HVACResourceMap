import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  templateUrl: './operation.component.html'
})
export class OperationComponent {
  readonly title = 'Exposure Control Devices: Operation and Training Resources';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
  }

}
