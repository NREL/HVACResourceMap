import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '@services/shared.service';

@Component({
  templateUrl: './laboratories-home.component.html'
})
export class LaboratoriesHomeComponent {
  readonly title = 'Lab HVAC';

  constructor(private sharedService: SharedService, private router: Router) {
    sharedService.setTitle(this.title);

    const url_segments = this.router.url.split('/');
    const last = url_segments[url_segments.length -1];
    if (last == 'central-plant') {
    	sharedService.setActiveSelectors('cp-outline');
    } else if (last == 'lab-space') {
    	sharedService.setActiveSelectors('lab_outline');
    } else if (last == 'lab-exhaust-devices') {
    	sharedService.setActiveSelectors('exhaustoutline');
    } else if (last == 'distribution') {
    	sharedService.setActiveSelectors('disoutline');
    }

  }

}
