import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  selector: 'app-pump',
  templateUrl: './pump.component.html',
  styleUrls: ['./pump.component.scss']
})
export class PumpComponent {
  readonly title = 'Pump: Basics';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
  }

}
