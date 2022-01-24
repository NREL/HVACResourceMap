import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  readonly title = 'Contact Us';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
  }

}
