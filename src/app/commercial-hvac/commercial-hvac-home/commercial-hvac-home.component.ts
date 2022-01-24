import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  selector: 'app-commercial-hvac-home',
  templateUrl: './commercial-hvac-home.component.html',
  styleUrls: ['./commercial-hvac-home.component.scss']
})
export class CommercialHVACHomeComponent {
  readonly title = 'Commercial HVAC';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
  }

}
