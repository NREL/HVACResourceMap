import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  templateUrl: './optimized-exhaust-stack-design.component.html'
})
export class OptimizedExhaustStackDesignComponent {
  readonly title = 'Optimized Exhaust Stack Design';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
  }

}
