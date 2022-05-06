import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  templateUrl: './tools.component.html'
})
export class ToolsComponent {
  readonly title = 'Cooling Tower: Design Calculators and Tools';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
    sharedService.setActiveSelectors('cooltower-outline');
  }

}
