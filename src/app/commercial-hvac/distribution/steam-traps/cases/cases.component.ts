import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss']
})
export class CasesComponent {
  readonly title = 'Steam Traps: Case Studies';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
  }

}
