import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  selector: 'app-codes',
  templateUrl: './codes.component.html',
  styleUrls: ['./codes.component.scss']
})
export class CodesComponent {
  readonly title = 'Air Handling Units: Performance Ratings';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
  }

}
