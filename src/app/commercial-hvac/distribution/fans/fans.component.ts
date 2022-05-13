import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  templateUrl: './fans.component.html'
})
export class FansComponent {
  readonly title = 'Fan: General Information';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
    sharedService.setActiveSelectors('fan2');
  }

}
