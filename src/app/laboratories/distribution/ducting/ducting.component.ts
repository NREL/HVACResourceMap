import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  selector: 'app-ducting',
  templateUrl: './ducting.component.html'
})
export class DuctingComponent {
  readonly title = 'Ducting: General Information';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
  }

}
