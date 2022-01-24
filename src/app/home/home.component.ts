import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent {
  constructor(private sharedService: SharedService) {
    sharedService.setTitle();
  }

}
