import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  templateUrl: './procure.component.html'
})
export class ProcureComponent {
  readonly title = 'Piping: Procurement and Performance Specifications';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
  }

}
