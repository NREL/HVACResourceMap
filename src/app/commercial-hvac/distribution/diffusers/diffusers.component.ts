import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  selector: 'app-diffusers',
  templateUrl: './diffusers.component.html',
  styleUrls: ['./diffusers.component.scss']
})
export class DiffusersComponent {
  readonly title = 'Diffusers';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
  }

}
