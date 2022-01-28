import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  selector: 'app-diffuser',
  templateUrl: './diffuser.component.html'
})
export class DiffuserComponent {
  readonly title = 'Diffuser: General Information';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
  }

}
