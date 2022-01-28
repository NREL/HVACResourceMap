import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  selector: 'app-optimized-exhaust-stack-design',
  templateUrl: './optimized-exhaust-stack-design.component.html'
})
export class OptimizedExhaustStackDesignComponent {
  readonly title = 'Optimized Exhaust Stack Design';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
  }

}
