import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  selector: 'app-ahu',
  templateUrl: './ahu.component.html',
  styleUrls: ['./ahu.component.scss']
})
export class AhuComponent {
  readonly title = 'Air Handling Units: General Description and Uses';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
  }

}
