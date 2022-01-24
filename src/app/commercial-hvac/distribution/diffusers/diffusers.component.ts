import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  templateUrl: './diffusers.component.html'
})
export class DiffusersComponent {
  readonly title = 'Diffusers';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
  }

}
