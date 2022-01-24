import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  selector: 'app-fans',
  templateUrl: './fans.component.html',
  styleUrls: ['./fans.component.scss']
})
export class FansComponent {
  readonly title = 'Fan: General Information';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
  }

}
