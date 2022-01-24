import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  selector: 'app-procure',
  templateUrl: './procure.component.html',
  styleUrls: ['./procure.component.scss']
})
export class ProcureComponent {
  readonly title = 'Piping: Procurement and Performance Specifications';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
  }

}
