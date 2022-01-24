import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  selector: 'app-piping',
  templateUrl: './piping.component.html',
  styleUrls: ['./piping.component.scss']
})
export class PipingComponent {
  readonly title = 'Piping: General Information';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
  }

}
