import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  templateUrl: './types.component.html'
})
export class TypesComponent {
  readonly title = 'Fan: Types';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
    sharedService.setActiveSelectors('fan2');
  }

}
