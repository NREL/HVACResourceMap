import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent {
  readonly title = 'Valve: Design Calculators and Tools';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
  }

}
