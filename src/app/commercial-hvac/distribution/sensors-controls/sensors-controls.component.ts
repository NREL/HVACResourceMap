import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  selector: 'app-sensors-controls',
  templateUrl: './sensors-controls.component.html',
  styleUrls: ['./sensors-controls.component.scss']
})
export class SensorsControlsComponent {
  readonly title = 'Sensors and Controls';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
  }

}
