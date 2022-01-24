import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  templateUrl: './steam-traps.component.html'
})
export class SteamTrapsComponent {
  readonly title = 'Steam Traps: General Information';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
  }

}
