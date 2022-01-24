import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  templateUrl: './ahu.component.html'
})
export class AhuComponent {
  readonly title = 'Air Handling Units: General Description and Uses';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
  }

}
