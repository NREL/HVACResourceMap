import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  selector: 'app-eems',
  templateUrl: './eems.component.html',
  styleUrls: ['./eems.component.scss']
})
export class EemsComponent {
  readonly title = 'Air Handling Units: Performance Ratings';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
  }

}
