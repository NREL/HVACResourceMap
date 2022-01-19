import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  selector: 'app-chiller',
  templateUrl: './chiller.component.html',
  styleUrls: ['./chiller.component.scss']
})
export class ChillerComponent {
  readonly title = 'Chiller: General Description and Uses';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
  }

}
