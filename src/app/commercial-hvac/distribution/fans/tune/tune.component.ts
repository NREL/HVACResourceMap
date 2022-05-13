import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  templateUrl: './tune.component.html'
})
export class TuneComponent {
  readonly title = 'Fan: Tune-Up Measures';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
    sharedService.setActiveSelectors('fan2');
  }

}
