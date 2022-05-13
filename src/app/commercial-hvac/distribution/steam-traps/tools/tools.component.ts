import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  templateUrl: './tools.component.html'
})
export class ToolsComponent {
  readonly title = 'Steam Traps: Design Calculators and Tools';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
    sharedService.setActiveSelectors('steamtrap');
  }

}
