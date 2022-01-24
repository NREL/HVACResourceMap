import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  selector: 'app-distribution',
  templateUrl: './distribution.component.html',
  styleUrls: ['./distribution.component.scss']
})
export class DistributionComponent {
  readonly title = 'Distribution System';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
  }

}
