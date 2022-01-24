import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  selector: 'app-contributors',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.scss']
})
export class ContributorsComponent {
  readonly title = 'Contributors';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
  }

}
