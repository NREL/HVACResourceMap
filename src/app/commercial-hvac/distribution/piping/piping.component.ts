import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  templateUrl: './piping.component.html'
})
export class PipingComponent {
  readonly title = 'Piping: General Information';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
    sharedService.setActiveSelectors('pipe1');
  }

}
