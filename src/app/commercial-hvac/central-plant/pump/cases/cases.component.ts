import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  templateUrl: './cases.component.html'
})
export class CasesComponent {
  readonly title = 'Pump: Case Studies';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
  }

}
