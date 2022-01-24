import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  selector: 'app-codes',
  templateUrl: './codes.component.html'
})
export class CodesComponent {
  readonly title = 'Pump: Performance Ratings';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
  }

}
