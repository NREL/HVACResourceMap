import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  readonly title = 'Contact Us';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
  }

}
