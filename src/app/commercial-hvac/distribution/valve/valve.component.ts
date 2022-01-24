import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  selector: 'app-valve',
  templateUrl: './valve.component.html',
  styleUrls: ['./valve.component.scss']
})
export class ValveComponent {
  readonly title = 'Valve: General Information';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
  }

}
