import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html'
})
export class ToolsComponent {
  readonly title = 'Exposure Control Devices: Design Calculators and Tools';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
  }

}
